import styles from './layout.module.css';
import Nav from './nav';
import User from './user';

export default function Layout({ children, params }) {
	return (
		<>
			<div className={styles.main}>
				<User userid={params.userid} />
				<Nav userid={params.userid} />
				{children}
			</div>
		</>
	);
}
