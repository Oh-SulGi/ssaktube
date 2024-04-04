import styles from './page.module.css';
import Profile from './profile';
import Stream from './stream';

export default function Page() {
	return (
		<>
			<div className={styles.main}>
				<h2 className={styles.title}>프로필설정</h2>
				<Profile />
				<Stream />
			</div>
		</>
	);
}
