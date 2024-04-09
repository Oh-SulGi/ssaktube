'use client';
import styles from './chat.module.css';

export default function ChatLable() {
	return (
		<>
			<div className={styles.chatlabel}>
				<div>
					<button>확축</button>
				</div>
				<div>채팅</div>
				<div>
					<button>더보기</button>
				</div>
			</div>
		</>
	);
}
