'use client';
import styles from './sidebar.module.css';
import SidebarToggleBtn from './sidebarToggleBtn';
import SidebarStreamerNav from './sidebarStreamerNav';
import SidebarType from './sidebarType';
import { useAppSelector } from '@/util/redux/hooks';
import Link from 'next/link';

export default function Sidebar({ children }) {
	const { isOpen } = useAppSelector((state) => state.ui);
	return (
		<div className={`${styles.sidebar} ${isOpen ? '' : styles.close}`}>
			<SidebarToggleBtn />
			<Link href={'/'}>
				<div className={styles.homelogo}>홈으로</div>
			</Link>
			<div className={styles.nav}>
				<SidebarType />
				<SidebarStreamerNav />
			</div>
		</div>
	);
}
