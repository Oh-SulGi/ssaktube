'use client';

import styles from './buttons.module.css';
import Link from 'next/link';

export default function ButtonLogin() {
	return (
		<Link href={'/login'} className={styles.link}>
			<button className={styles.btn2}>로그인</button>
		</Link>
	);
}
