'use client';
import useSWR from 'swr';
import styles from './community.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Community({ userid }) {
	// const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	// const { data, error, isLoading } = useSWR(`/api/live`, fetcher, {
	// 	revalidateIfStale: false,
	// 	revalidateOnFocus: false,
	// 	revalidateOnReconnect: false,
	// 	revalidateOnMount: true,
	// });
	// if(isLoading){
	//     return <></>
	// }
	// if(error){
	//     return <></>
	// }
	const [cur, setcur] = useState(0);
	const [max, setmax] = useState(6);
	const [vw, setvw] = useState(window.innerWidth);
	const resizeListener = () => {
		setvw(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, []);
	useEffect(() => {
		console.log(vw);
		setmax(4);
		if (window.innerWidth < 1490) {
			setmax(3);
		}
	}, [vw]);

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
		<div className={styles.community}>
			<div className={styles.header}>
				<div className={styles.label}>
					<h2>커뮤니티</h2>
					<button>바로가기버튼</button>
				</div>
			</div>
			<div className={styles.tabsWrapper}>
				<span
					className={styles.arrowPrev}
					onClick={(e) => {
						setcur((cur) => cur - 1);
					}}
					style={{ display: cur == 0 ? 'none' : 'flex' }}
				>
					<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M16.5 20.5 L11 15 L16.5 9.5 ' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'></path>
					</svg>
				</span>
				<div className={styles.tabs} style={{ transform: `translateX(-${cur * (100 / max)}%)` }}>
					{data.map((item, index) => (
						<Link
							href={`/user/${userid}/community/${item.idx}`}
							key={index}
							className={styles.contentWrapper}
							style={{ width: `${100 / max}%`, minWidth: `${100 / max}%` }}
						>
							<div className={styles.content}>
								<div className={styles.info}>
									<div>
										<Image src={item.userlogo} width={40} height={40} alt='스트리머 로고' className={styles.streamerLogo} />
									</div>
									<div>
										<p className={styles.streamerName}>{item.username}</p>
										{/* <p>{item.date}</p> */}
										<p className={styles.date}>24.2.20</p>
									</div>
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
				<span
					className={styles.arrowNext}
					onClick={(e) => {
						setcur((cur) => cur + 1);
					}}
					style={{ display: cur >= data.length - max ? 'none' : 'flex' }}
				>
					<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M13 20.5L18.5 15L13 9.5' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'></path>
					</svg>
				</span>
			</div>
		</div>
	);
}
