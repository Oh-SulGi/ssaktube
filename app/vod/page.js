import styles from './page.module.css';
import Vods from './vods';

export default function Page() {
	return (
		<>
			<div className={styles.main}>
				<div className={styles.label}>
					<h2>전체 VOD</h2>
				</div>
				<Vods />
			</div>
		</>
	);
}
