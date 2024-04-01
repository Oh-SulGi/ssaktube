import { Inter, Nanum_Gothic } from 'next/font/google';
import './globals.css';
import Header from './header';
import Sidebar from './sidebar';
import styles from './layout.module.css';

// const inter = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700', '800'] });

export const metadata = {
	title: '싹튜브',
	description: '새싹3조 streaming',
};

export default function RootLayout({ children }) {
	return (
		<html lang='ko'>
			{/* <body className={inter.className}> */}
			<body>
				<Header />
				<Sidebar />
				<div className={styles.main}>{children}</div>
			</body>
		</html>
	);
}
