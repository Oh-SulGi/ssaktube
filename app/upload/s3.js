'use client';
import { useEffect, useState } from 'react';
import styles from './s3.module.css';
import { motion } from 'framer-motion';

export default function S3() {
	const [file, setfile] = useState('');
	const [filem, setfilem] = useState('');
	const [filename, setfilename] = useState('');
	const [uploadiProgress, setuploadiProgress] = useState(0);
	const [uploadProgress, setuploadProgress] = useState(0);
	const [time, settime] = useState('');
	useEffect(() => {
		const wwtime = new Date().getTime();
		settime(wwtime);
	}, []);

	return (
		<>
			<div className={styles.sub}>
				<h4 className={styles.subtitle}>영상 제목 입력</h4>
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
				<h4 className={styles.subtitle}>섬네일 선택</h4>
				<div className={styles.change}>
					<input
						type='file'
						accept='image/*'
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
							setuploadiProgress(100);
						}}
					>
						제출하기
					</button>
				</div>
				<div className={styles.change} style={{ width: '368px' }}>
					<motion.div className={styles.progress} style={{ scaleX: `${uploadiProgress}%` }}></motion.div>
					<p className={styles.progressStatus}>{uploadiProgress}%</p>
				</div>
				<h4 className={styles.subtitle}>영상 선택</h4>
				<div className={styles.change}>
					<input
						type='file'
						accept='video/*'
						onChange={(e) => {
							const files = e.target.files;
							if (files) {
								setfilem(files[0]);
							}
						}}
						style={{ height: 'fit-content' }}
					></input>
					<button
						onClick={(e) => {
							setuploadProgress(100);
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
