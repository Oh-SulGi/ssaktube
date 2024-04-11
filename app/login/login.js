'use client';
import { useState } from 'react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
export default function Login() {
	const [status, setstatus] = useState('로그인 / 회원가입을 선택해 주세요');
	const [email, setid] = useState('');
	const [password, setpw] = useState('');
	const [code, setcode] = useState('');
	const [isauth, setisauth] = useState(false);
	const router = useRouter();
	return (
		<div className={styles.form}>
			<div className={styles.input}>
				<h2>아이디</h2>
				<input
					type='email'
					value={email}
					onChange={(e) => {
						setid(e.target.value);
					}}
				></input>
				<h2>비밀번호</h2>
				<input
					type='password'
					value={password}
					onChange={(e) => {
						setpw(e.target.value);
					}}
				></input>
			</div>
			<div className={styles.buttons}>
				<button
					className={styles.button}
					onClick={(e) => {
						setstatus('로그인 중입니다');
						fetch(`/api/user/login`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								email,
								password,
							}),
						})
							.then((res) => {
								console.log(res);
								if (res.status !== 200) {
									throw new Error(res.json());
								}
								return res.json();
							})
							.then((data) => {
								console.log(data);
								setstatus('로그인 되었습니다.');
								router.push('/');
								router.refresh();
							})
							.catch((error) => {
								console.log(error);
								setstatus('문제가 발생하였습니다. 다시 시도해주세요');
							});
					}}
				>
					로그인
				</button>
				<button
					className={styles.button}
					onClick={(e) => {
						setstatus('회원가입을 진행중 입니다');
						fetch(`/api/user/signup`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								email,
								password,
							}),
						})
							.then((res) => {
								console.log(res);
								if (res.status !== 200) {
									throw new Error(res.json());
								}
								return res.json();
							})
							.then((data) => {
								console.log(data);
								setisauth(true);
								setstatus('이메일로 전송된 코드를 확인해 주세요');
							})
							.catch((error) => {
								console.log(error);
								setstatus('문제가 발생하였습니다. 다시 시도해주세요');
							});
					}}
				>
					회원가입
				</button>
			</div>
			<div className={styles.status}>
				<p>{status}</p>
			</div>
			{isauth ? (
				<>
					<div className={styles.input}>
						<h2>인증번호</h2>
						<input
							type='text'
							value={code}
							onChange={(e) => {
								setcode(e.target.value);
							}}
						></input>
					</div>
					<div className={styles.buttons}>
						<button
							className={styles.button}
							onClick={(e) => {
								setstatus('인증번호 확인 중 ...');
								fetch(`/api/user/signup/email_authentication`, {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
									},
									body: JSON.stringify({
										email,
										code,
									}),
								})
									.then((res) => {
										console.log(res);
										if (res.status !== 200) {
											throw new Error(res.json());
										}
										return res.json();
									})
									.then((data) => {
										setstatus('인증번호 확인 완료, 로그인해주세요');
										setisauth(false);
									})
									.catch((error) => {
										console.log(error);
										setstatus('문제가 발생하였습니다. 다시 시도해주세요');
									});
							}}
						>
							제출
						</button>
					</div>
				</>
			) : (
				''
			)}
		</div>
	);
}
