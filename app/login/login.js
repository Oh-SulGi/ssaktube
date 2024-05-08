'use client';
import { useEffect, useState } from 'react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/util/redux/hooks';
import { setneedcheck } from '@/util/redux/reducers/login';
export default function Login() {
	const [status, setstatus] = useState('로그인 / 회원가입을 선택해 주세요');
	const [email, setid] = useState('');
	const [password, setpw] = useState('');
	const [code, setcode] = useState('');
	const [isauth, setisauth] = useState(false);
	const router = useRouter();
	const dispatch = useAppDispatch();

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
						setTimeout(() => {
							if (email == 'sample@sample.com' && password == '1111') {
								setstatus('로그인 되었습니다.');
								setTimeout(() => {
									fetch(`/api/user/login`, {
										method: 'OPTIONS',
										headers: {
											'Content-Type': 'application/json',
										},
									})
										.then((res) => res.json())
										.then((data) => {
											dispatch(setneedcheck(true));
											router.push('/');
											router.refresh();
										});
								}, 1000);
							} else {
								setstatus('문제가 발생하였습니다. 다시 시도해주세요');
							}
						}, 2000);
					}}
				>
					로그인
				</button>
				<button
					className={styles.button}
					onClick={(e) => {
						setstatus('회원가입을 진행중 입니다');
						setTimeout(() => {
							setisauth(true);
							setstatus('이메일로 전송된 코드를 확인해 주세요(1111)');
						}, 2000);
					}}
				>
					회원가입
				</button>
			</div>
			<div className={styles.status}>
				<p>{status}</p>
				<p>(id : sample@sample.com, pw : 1111)</p>
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
								setTimeout(() => {
									if (code == '1111') {
										setstatus('인증번호 확인 완료, 로그인해주세요');
										setisauth(false);
									} else {
										setstatus('문제가 발생하였습니다. 다시 시도해주세요');
									}
								}, 2000);
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
