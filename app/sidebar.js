'use client';
import styles from './sidebar.module.css';
import SidebarToggleBtn from './sidebarToggleBtn';
import SidebarStreamerNav from './sidebarStreamerNav';
import SidebarType from './sidebarType';
import { useAppSelector } from '@/util/redux/hooks';
import Link from 'next/link';
import Image from 'next/image';
import SidebarHelp from './sidebarHelp';
import SidebarStreamerNavFav from './sidebarStreamerNavFav';

export default function Sidebar({ children }) {
	const { isOpen, isLogin } = useAppSelector((state) => state.ui);
	return (
		<div className={`${styles.sidebar} ${isOpen ? '' : styles.close}`}>
			<SidebarToggleBtn />
			<Link href={'/'}>
				<Image className={styles.homelogo} src={'/shssk.png'} width={102} height={43} alt='shssk로고' />
			</Link>
			<div className={styles.nav}>
				<SidebarType />
				<SidebarStreamerNav />
				{isLogin ? <SidebarStreamerNavFav /> : ''}
				<SidebarHelp />
			</div>
		</div>
	);
}
