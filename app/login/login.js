'use client';
import { useState } from 'react';
import styles from './login.module.css';
export default function Login() {
	const [status, setstatus] = useState('로그인 / 회원가입을 선택해 주세요');
	return (
		<div className={styles.form}>
			<div className={styles.input}>
				<h2>아이디</h2>
				<input type='text'></input>
				<h2>비밀번호</h2>
				<input type='password'></input>
			</div>
			<div className={styles.buttons}>
				<button className={styles.button}>로그인</button>
				<button
					className={styles.button}
					onClick={(e) => {
						fetch('http://172.16.219.74:8000/user/signup', {
							method: 'POST',
							body: JSON.stringify({
								email: 'sdh977@naver.com',
								password: '123123123123',
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
