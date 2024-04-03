import Login from './login';
import styles from './page.module.css';
export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Login />
		</div>
	);
}
