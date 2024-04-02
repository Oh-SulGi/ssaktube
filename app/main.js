'use client';
import { useAppSelector } from '@/util/redux/hooks';
import styles from './main.module.css';

export default function Main({ children }) {
	const { isOpen } = useAppSelector((state) => state.ui);
	return <div className={`${styles.main} ${isOpen ? '' : styles.close}`}>{children}</div>;
}
