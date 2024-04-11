import styles from './page.module.css';

import Wrapper from './wrapper';

export default function Page() {
	return (
		<>
			<div className={styles.main}>
				<h2 className={styles.title}>프로필설정</h2>
				<Wrapper />
			</div>
		</>
	);
}
