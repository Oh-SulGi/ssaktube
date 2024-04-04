'use client';
import { useState } from 'react';
import styles from './login.module.css';
export default function Login() {
	const [status, setstatus] = useState('로그인 / 회원가입을 선택해 주세요');
	const [email, setid] = useState('');
	const [password, setpw] = useState('');
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
				<button className={styles.button}>로그인</button>
				<button
					className={styles.button}
					onClick={(e) => {
						fetch('http://192.168.239.184:8000/api/user/signup', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								email,
								password,
							}),
						})
							.then((res) => res.json())
							.then((data) => {
								console.log(data);
							});
					}}
				>
					회원가입
				</button>
			</div>
			<div className={styles.status}>
				<p>{status}</p>
			</div>
		</div>
	);
}
