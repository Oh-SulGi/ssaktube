'use client';
import styles from './nav.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/util/redux/hooks';
import { setUserTab } from '@/util/redux/reducers/ui';
import { useEffect } from 'react';

export default function Nav({ userid }) {
	const { userTab } = useAppSelector((state) => state.ui);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setUserTab('home'));
	}, []);
	const tabs = {
		home: { label: '홈', src: `/user/${userid}` },
		video: { label: '동영상', src: `/user/${userid}/video` },
		community: { label: '커뮤니티', src: `/user/${userid}/community` },
	};
	return (
		<div className={styles.navWrapper}>
			<ul className={styles.nav}>
				{Object.keys(tabs).map((item) => (
					<Link className={styles.link} href={tabs[item].src} key={tabs[item].label}>
						<li
							className={styles.list}
							onClick={(e) => {
								dispatch(setUserTab(item));
							}}
						>
							{tabs[item].label}
							{item === userTab ? <motion.div className={styles.underline} layoutId='underline' /> : null}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}
