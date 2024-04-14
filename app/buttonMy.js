'use client';

import Image from 'next/image';
import styles from './buttonMy.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/util/redux/hooks';
import { setISLogin } from '@/util/redux/reducers/ui';

export default function ButtonMy({ userid, userLogo }) {
	const [isopen, setisopen] = useState(false);
	const router = useRouter();
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setISLogin(true));

		return () => {
			dispatch(setISLogin(false));
		};
	}, []);

	return (
		<>
			<div
				className={styles.profile}
				onMouseLeave={(e) => {
					setisopen(false);
				}}
			>
				<Image
					className={styles.logo}
					src={`${userLogo}`}
					width={30}
					height={30}
					alt='프로필사진'
					onClick={(e) => {
						setisopen(true);
					}}
				/>
				{isopen ? (
					<div className={styles.tab}>
						<ul>
							<li>
								<Link href={'/my'}>내 정보</Link>
							</li>
							<li>
								<Link href={'/upload'}>영상 업로드</Link>
							</li>
							<li
								onClick={(e) => {
									fetch('/api/user/logout', { method: 'POST' })
										.then((res) => res.json())
										.then((data) => {
											router.push('/');
											router.refresh();
										});
								}}
							>
								로그아웃
							</li>
						</ul>
					</div>
				) : (
					''
				)}
			</div>
		</>
	);
}
