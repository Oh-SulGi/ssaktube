'use client';
import Image from 'next/image';
import styles from './back.module.css';
import { useState } from 'react';

export default function Back() {
	const thumblist = ['11111', '22222', '33333', '44444', '55555', '66666', '77777'];
	const [imgsrc, setimgsrc] = useState('11111');
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.imgWrapper}>
					<Image src={`/sample/${imgsrc}.png`} alt='배경화면' fill={true} />
				</div>
			</div>
			<div>
				<ul className={styles.thumbList}>
					{thumblist.map((thumb, index) => (
						<li
							key={index}
							className={styles.thumb}
							onClick={(e) => {
								setimgsrc(thumb);
							}}
						>
							<Image src={`/sample/${thumb}.png`} alt='배경화면' width={134} height={74} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
