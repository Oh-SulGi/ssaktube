import Image from 'next/image';
import styles from './sidebar.module.css';
import SidebarToggleBtn from './sidebarToggleBtn';
import SidebarStreamerNav from './sidebarStreamerNav';
import SidebarType from './sidebarType';

export default function Sidebar({ children }) {
	return (
		<div className={styles.sidebar}>
			<SidebarToggleBtn />

			<div className={styles.nav}>
				<SidebarType />
				<SidebarStreamerNav />
			</div>
		</div>
	);
}
