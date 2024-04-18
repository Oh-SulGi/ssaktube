'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from './redux/hooks';
import styles from './followBtn.module.css';
import { useEffect, useState } from 'react';

export default function FollowBtn({ target_userid }) {
	const { isLogin } = useAppSelector((state) => state.ui);
	const [isfollow, setisfollow] = useState(false);
	const router = useRouter();
	useEffect(() => {
		fetch(`/api/user/properties/current_user`, { method: 'POST' })
			.then((res) => {
				if (res.status != 200) {
					console.log('/api/user/properties/current_user 에러');
					throw new Error();
				}
				return res.json();
			})
			.then((data) => {
				const userid = data.data.userid;
				const username = data.data.username;
				console.log(userid);
				fetch(`/api/follow/status`, { method: 'POST', body: JSON.stringify({ userid, target_userid }) })
					.then((res) => {
						if (res.status != 200) {
							console.log('/api/follow/status 에러');
							throw new Error();
						}
						return res.json();
					})
					.then((data) => {
						if (data.data.action == 'follow') {
							setisfollow(true);
						}
					});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (!isLogin) {
		return (
			<div
				className={styles.btns}
				onClick={(e) => {
					alert('로그인해주세요');
					router.push('/login');
				}}
			>
				<button className={styles.followBtn}>팔로우</button>
			</div>
		);
	}

	return (
		<div
			className={styles.btns}
			onClick={(e) => {
				fetch(`/api/user/properties/current_user`, { method: 'POST' })
					.then((res) => {
						if (res.status != 200) {
							console.log('/api/user/properties/current_user 에러');
							throw new Error();
						}
						return res.json();
					})
					.then((data) => {
						const userid = data.data.userid;
						const username = data.data.username;
						console.log(userid);
						fetch(`/api/follow`, { method: 'POST', body: JSON.stringify({ userid, target_userid }) })
							.then((res) => {
								if (res.status != 200) {
									console.log('/api/follow 에러');
									throw new Error();
								}
								return res.json();
							})
							.then((data) => {
								if (data.data.action == 'follow') {
									setisfollow(true);
								} else {
									setisfollow(false);
								}
							});
					})
					.catch((error) => {
						console.log(error);
					});
			}}
		>
			<button className={styles.followBtn}>팔로우 {isfollow ? '중' : ''}</button>
		</div>
	);
}
