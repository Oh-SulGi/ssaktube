'use client';

import styles from './chat.module.css';
export default function ChatLog({ id }) {
	return (
		<>
			<div id='chatlog' className={styles.chatlog}>
				내용
			</div>
		</>
	);
}
