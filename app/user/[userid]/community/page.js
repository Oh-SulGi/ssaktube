'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useAppDispatch } from '@/util/redux/hooks';
import { useEffect } from 'react';
import { setUserTab } from '@/util/redux/reducers/ui';

export default function Page({ params }) {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setUserTab('community'));
	}, []);
	const data = [
		{
			idx: 0,
			content: '커뮤니티내용',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			commentCount: 1,
			date: '',
		},
		{
			idx: 1,
			content: '커뮤니티내용',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			commentCount: 2,
		},
		{
			idx: 2,
			content: '커뮤니티내용',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			commentCount: 3,
		},
		{
			idx: 3,
			content: '커뮤니티내용',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			commentCount: 4,
		},
		{
			idx: 4,
			content: '커뮤니티내용',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			commentCount: 5,
		},
	];
	return (
		<>
			<div className={styles.main}>
				<div className={styles.tabs}>
					{data.map((item, index) => (
						<Link key={index} className={styles.contentWrapper} href={`/user/${params.userid}/community/${item.idx}`}>
							<div>
								<Image className={styles.streamerLogo} src={item.userlogo} width={36} height={36} alt='스트리머 로고' />
							</div>
							<div className={styles.content}>
								<div className={styles.info}>
									<div>
										<p className={styles.streamerName}>{item.username}</p>
										<p className={styles.date}>24.2.20</p>
									</div>
									<button>더보기</button>
								</div>
								<div className={styles.detail}>{item.content}</div>
								<div className={styles.etc}>
									<div className={styles.comment}>
										<svg width='17px' height='17px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
											<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
											<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
											<g id='SVGRepo_iconCarrier'>
												<path d='M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z'></path>
											</g>
										</svg>
										<p>{item.commentCount}</p>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
