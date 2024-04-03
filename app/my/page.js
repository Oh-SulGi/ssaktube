import styles from './page.module.css';

export default function Page() {
	return (
		<>
			<div className={styles.profile}>내 프로필 설정</div>
			<div className={styles.stream}>방송부분</div>
		</>
	);
}
