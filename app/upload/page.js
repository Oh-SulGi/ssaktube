import styles from './page.module.css';
import S3 from './s3';

export default function Page() {
	return (
		<>
			<div className={styles.main}>
				<h2 className={styles.title}>영상 업로드</h2>
			</div>
			<div>
				<S3 />
			</div>
		</>
	);
}
