import styles from './buttons.module.css';

export default function Buttons() {
	return (
		<div>
			<button
				className={styles.btn1}
				// onClick={(e) => {
				// 	document.documentElement.setAttribute('color-theme', 'light');
				// }}
			>
				닼
			</button>
			<button className={styles.btn2}>로그인</button>
		</div>
	);
}
