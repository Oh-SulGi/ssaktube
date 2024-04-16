'use client';
import { useEffect, useState } from 'react';
import styles from './s3.module.css';
import { motion } from 'framer-motion';

export default function S3() {
	const [file, setfile] = useState('');
	const [filename, setfilename] = useState('');
	const [uploadProgress, setuploadProgress] = useState(0);
	const [time, settime] = useState('');
	useEffect(() => {
		const wwtime = new Date().getTime();
		settime(wwtime);
	}, []);

	return (
		<>
			<div className={styles.sub}>
				<h4 className={styles.subtitle}>영상 선택</h4>
				<div className={styles.change}>
					<input
						type='text'
						placeholder='영상제목을 입력해주세요'
						onChange={(e) => {
							setfilename(e.target.value);
						}}
						style={{ width: '368px' }}
					></input>
				</div>
				<div className={styles.change}>
					<input
						type='file'
						onChange={(e) => {
							const files = e.target.files;
							if (files) {
								setfile(files[0]);
							}
						}}
						style={{ height: 'fit-content' }}
					></input>
					<button
						onClick={(e) => {
							console.log(file);
							fetch('/api/user/properties', { method: 'OPTIONS' })
								.then((res) => res.json())
								.then((data) => {
									const userid = data.data.userid;
									fetch(`/api/s3/thumb`, {
										method: 'POST',
										body: JSON.stringify({ contentType: file.type, filename, userid, time }),
										headers: {
											'Content-Type': 'application/json',
										},
									})
										.then((res) => res.json())
										.then(async ({ url, fields }) => {
											console.log(url);
											console.log(fields);
											const formData = new FormData();
											Object.entries(fields).forEach(([key, value]) => {
												formData.append(key, value);
											});
											formData.append('file', file);

											const xhr = new XMLHttpRequest();
											xhr.upload.addEventListener('progress', (e) => {
												if (e.lengthComputable) {
													setuploadProgress(((e.loaded / e.total) * 100).toFixed(2));
												}
											});
											xhr.addEventListener('load', (e) => {
												if (xhr.status >= 200 && xhr.status < 300) {
													console.log('업로드성공');
												} else {
													console.error('업로드실패');
												}
											});
											xhr.addEventListener('error', (e) => {
												setuploadProgress('업로드실패');
											});
											xhr.open('POST', url);
											xhr.send(formData);
											// const upload = await fetch(url, {
											// 	method: 'POST',
											// 	body: formData,
											// });
											// console.log(upload);
											// if (upload.ok) {
											// 	console.log('업로드완료');
											// } else {
											// 	console.log('변경실패');
											// }
										})
										.catch((error) => {
											setuploadProgress('업로드실패');
										});
								});
						}}
					>
						제출하기
					</button>
				</div>
				<div className={styles.change}>
					<input
						type='file'
						onChange={(e) => {
							const files = e.target.files;
							if (files) {
								setfile(files[0]);
							}
						}}
						style={{ height: 'fit-content' }}
					></input>
					<button
						onClick={(e) => {
							console.log(file);
							fetch('/api/user/properties', { method: 'OPTIONS' })
								.then((res) => res.json())
								.then((data) => {
									const userid = data.data.userid;
									fetch(`/api/s3/video`, {
										method: 'POST',
										body: JSON.stringify({ contentType: file.type, filename, userid, time }),
										headers: {
											'Content-Type': 'application/json',
										},
									})
										.then((res) => res.json())
										.then(async ({ url, fields }) => {
											console.log(url);
											console.log(fields);
											const formData = new FormData();
											Object.entries(fields).forEach(([key, value]) => {
												formData.append(key, value);
											});
											formData.append('file', file);

											const xhr = new XMLHttpRequest();
											xhr.upload.addEventListener('progress', (e) => {
												if (e.lengthComputable) {
													setuploadProgress(((e.loaded / e.total) * 100).toFixed(2));
												}
											});
											xhr.addEventListener('load', (e) => {
												if (xhr.status >= 200 && xhr.status < 300) {
													console.log('업로드성공');
												} else {
													console.error('업로드실패');
												}
											});
											xhr.addEventListener('error', (e) => {
												setuploadProgress('업로드실패');
											});
											xhr.open('POST', url);
											xhr.send(formData);
											// const upload = await fetch(url, {
											// 	method: 'POST',
											// 	body: formData,
											// });
											// console.log(upload);
											// if (upload.ok) {
											// 	console.log('업로드완료');
											// } else {
											// 	console.log('변경실패');
											// }
										})
										.catch((error) => {
											setuploadProgress('업로드실패');
										});
								});
						}}
					>
						제출하기
					</button>
				</div>
				<div className={styles.change} style={{ width: '368px' }}>
					<motion.div className={styles.progress} style={{ scaleX: `${uploadProgress}%` }}></motion.div>
					<p className={styles.progressStatus}>{uploadProgress}%</p>
				</div>
			</div>
		</>
	);
}
