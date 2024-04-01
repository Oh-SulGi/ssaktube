import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: '싹튜브',
	description: '새싹3조 streaming',
};

export default function RootLayout({ children }) {
	return (
		<html lang='ko'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
