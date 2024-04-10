'use client';

import Image from 'next/image';
import styles from './buttonMy.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ButtonMy() {
	const [isopen, setisopen] = useState(false);
	const router = useRouter();
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
					src={'/aws.png'}
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
									router.refresh();
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
