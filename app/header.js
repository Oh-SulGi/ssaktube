import Buttons from './buttons';
import styles from './header.module.css';
import Search from './search';

export default function Header({ children }) {
	return (
		<div className={styles.nav}>
			<Search />
			<Buttons />
		</div>
	);
}
