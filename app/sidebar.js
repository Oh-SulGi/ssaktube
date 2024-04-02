'use client';
import styles from './sidebar.module.css';
import SidebarToggleBtn from './sidebarToggleBtn';
import SidebarStreamerNav from './sidebarStreamerNav';
import SidebarType from './sidebarType';
import { useAppSelector } from '@/util/redux/hooks';

export default function Sidebar({ children }) {
	const { isOpen } = useAppSelector((state) => state.ui);
	return (
		<div className={`${styles.sidebar} ${isOpen ? '' : styles.close}`}>
			<SidebarToggleBtn />
			<div className={styles.nav}>
				<SidebarType />
				<SidebarStreamerNav />
			</div>
		</div>
	);
}
