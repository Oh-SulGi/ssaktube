import './globals.css';
import Header from './header';
import Sidebar from './sidebar';
import styles from './layout.module.css';
import StoreProvider from '@/util/redux/storeProvider';
import Main from './main';

export const metadata = {
	title: '싹튜브',
	description: '새싹3조 streaming',
};

export default function RootLayout({ children }) {
	return (
		<StoreProvider>
			<html lang='ko'>
				<body>
					<Header />
					<Sidebar />
					<Main>{children}</Main>
				</body>
			</html>
		</StoreProvider>
	);
}
