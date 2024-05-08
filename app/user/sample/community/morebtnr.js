'use client';

import { useState } from 'react';
import styles from './morebtnr.module.css';

export default function MoreBtnr({ replyid }) {
	const [isopen, setisopen] = useState(false);
	return (
		<div className={styles.moreWrapper}>
			<button
				className={styles.more}
				onClick={(e) => {
					setisopen((isopen) => !isopen);
				}}
			>
				<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
					<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
					<g id='SVGRepo_iconCarrier'>
						{' '}
						<circle cx='12' cy='6' r='1.5'></circle> <circle cx='12' cy='12' r='1.5'></circle> <circle cx='12' cy='18' r='1.5'></circle>{' '}
					</g>
				</svg>
			</button>
			{isopen ? (
				<ul>
					<li
						className={styles.moreAction}
						onClick={(e) => {
							alert('삭제 완료되었습니다.');
							window.location.reload();
						}}
					>
						삭제
					</li>
				</ul>
			) : (
				''
			)}
		</div>
	);
}
