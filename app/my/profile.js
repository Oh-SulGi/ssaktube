'use client';
import { useEffect, useState } from 'react';
import styles from './profile.module.css';
import { useRouter } from 'next/navigation';

export default function Profile({ username }) {
	const [nusername, setnusername] = useState(username);
	const [opassword, setopassword] = useState('');
	const [npassword, setnpassword] = useState('');
	useEffect(() => {
		document.getElementById('nickname').setAttribute('disabled', true);
		document.getElementById('nicknamebtn').setAttribute('disabled', true);
		document.getElementById('deleteuser').setAttribute('disabled', true);
	}, []);
	const router = useRouter();
	return (
		<>
			<div>
				<h2 className={styles.title}>회원정보설정</h2>
				<div className={styles.sub}>
					<div className={styles.nick}>
						<h4 className={styles.subtitle}>아이콘 변경</h4>
					</div>
					<div className={styles.change}>
						<input type='file'></input>
						<button
						// onClick={(e) => {
						// 	fetch(`/api/user/properties/change_nickname`, { method: 'POST', body: JSON.stringify({ nnickname: nusername }) })
						// 		.then((res) => res.json())
						// 		.then((data) => {
						// 			router.refresh();
						// 			alert('아이콘 성공');
						// 		});
						// }}
						>
							변경하기
						</button>
					</div>
				</div>
				<div className={styles.sub}>
					<div className={styles.nick}>
						<h4 className={styles.subtitle}>닉네임변경</h4>
						<input
							type='checkbox'
							onChange={(e) => {
								if (e.target.checked) {
									document.getElementById('nickname').removeAttribute('disabled');
									document.getElementById('nicknamebtn').removeAttribute('disabled');
								} else {
									document.getElementById('nickname').setAttribute('disabled', true);
									document.getElementById('nicknamebtn').setAttribute('disabled', true);
								}
							}}
						></input>
					</div>
					<div className={styles.change}>
						<input
							id='nickname'
							type='text'
							value={nusername}
							placeholder={nusername}
							onChange={(e) => {
								setnusername(e.target.value);
							}}
						></input>
						<button
							id='nicknamebtn'
							onClick={(e) => {
								fetch(`/api/user/properties/change_nickname`, { method: 'POST', body: JSON.stringify({ nnickname: nusername }) })
									.then((res) => res.json())
									.then((data) => {
										router.refresh();
										alert('닉네임 변경 성공');
									});
							}}
						>
							변경하기
						</button>
					</div>
				</div>
				<div className={styles.sub}>
					<h4 className={styles.subtitle}>비밀번호변경</h4>
					<div className={styles.change}>
						<input
							type='text'
							placeholder='현재 비밀번호를 입력해주세요'
							onChange={(e) => {
								setopassword(e.target.value);
							}}
						></input>
					</div>
					<div className={styles.change}>
						<input
							type='text'
							placeholder='변경하고 싶은 비밀번호를 입력해주세요'
							onChange={(e) => {
								setnpassword(e.target.value);
							}}
						></input>
						<button
							onClick={(e) => {
								fetch(`/api/user/properties/change_password`, { method: 'POST', body: JSON.stringify({ npassword, opassword }) })
									.then((res) => res.json())
									.then((data) => {
										router.refresh();
										alert('비밀번호 변경 성공');
									});
							}}
						>
							변경하기
						</button>
					</div>
				</div>
				<div className={styles.sub}>
					<h4 className={styles.subtitle}>회원탈퇴</h4>
					<div>
						<div className={styles.nick}>
							<h4 className={styles.subtitle}>탈퇴버튼</h4>
							<input
								type='checkbox'
								onChange={(e) => {
									if (e.target.checked) {
										document.getElementById('deleteuser').removeAttribute('disabled');
									} else {
										document.getElementById('deleteuser').setAttribute('disabled', true);
									}
								}}
							></input>
							<button
								id='deleteuser'
								onClick={(e) => {
									console.log('delete_user');
									fetch(`/api/user/properties/delete_user`, { method: 'POST' })
										.then((res) => res.json())
										.then((data) => {
											console.log('delete_user complete');
											fetch('/api/user/logout', { method: 'POST' })
												.then((res) => res.json())
												.then((data) => {
													router.push('/');
													router.refresh();
												});
										});
								}}
							>
								회원탈퇴
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
