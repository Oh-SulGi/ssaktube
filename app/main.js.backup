'use client';
import { useAppSelector } from '@/util/redux/hooks';
import styles from './main.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setneedcheck, setuserid } from '@/util/redux/reducers/login';

export default function Main({ children }) {
	const { isOpen } = useAppSelector((state) => state.ui);
	const { needcheck } = useAppSelector((state) => state.login);
	const dispatch = useDispatch();

	useEffect(() => {
		if (needcheck) {
			fetch(`/api/user/properties`, {
				method: 'OPTIONS',
				cache: 'no-store',
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error(`/api/user/properties 에러 : ${res.status}, ${res.statusText}`);
					}
					return res.json();
				})
				.then((data) => {
					console.log(data);
					dispatch(setuserid(data.data.userid));
					dispatch(setneedcheck(false));
				})
				.catch((error) => {
					console.log(error.message);
				});
		}
		dispatch(setneedcheck(false));
		return () => {
			dispatch(setneedcheck(false));
		};
	}, [needcheck]);

	return <div className={`${styles.main} ${isOpen ? '' : styles.close}`}>{children}</div>;
}
