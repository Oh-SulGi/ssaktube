'use client';
import useSWR from 'swr';
import styles from './community.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Community({ userid }) {
	const fetcher = (...args) => fetch(...args, { method: 'POST', cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/user/${userid}/community`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
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
	if (isLoading) {
		return (
			<div className={styles.community}>
				<div className={styles.header}>
					<div className={styles.label}>
						<h2>커뮤니티</h2>
						<button className={styles.linkIcon}>
							<Link href={`/user/${userid}/video`}>
								<svg viewBox='0 0 24 24' fill='none'>
									<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
									<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
									<g id='SVGRepo_iconCarrier'>
										{' '}
										<path
											d='M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										></path>{' '}
									</g>
								</svg>
							</Link>
						</button>
					</div>
				</div>
				<div className={styles.tabsWrapper}>
					<p style={{ marginTop: '20px', marginBottom: '20px' }}>로딩중 입니다.</p>
				</div>
			</div>
		);
	}
	if (error) {
		return (
			<div className={styles.community}>
				<div className={styles.header}>
					<div className={styles.label}>
						<h2>커뮤니티</h2>
						<button className={styles.linkIcon}>
							<Link href={`/user/${userid}/video`}>
								<svg viewBox='0 0 24 24' fill='none'>
									<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
									<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
									<g id='SVGRepo_iconCarrier'>
										{' '}
										<path
											d='M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										></path>{' '}
									</g>
								</svg>
							</Link>
						</button>
					</div>
				</div>
				<div className={styles.tabsWrapper}>
					<p style={{ marginTop: '20px', marginBottom: '20px' }}>로딩중 입니다.</p>
				</div>
			</div>
		);
	}

	// const data = [
	// 	{
	// 		idx: 0,
	// 		content: '커뮤니티내용',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		commentCount: 1,
	// 		date: '',
	// 	},
	// 	{
	// 		idx: 1,
	// 		content: '커뮤니티내용',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		commentCount: 2,
	// 	},
	// 	{
	// 		idx: 2,
	// 		content: '커뮤니티내용',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		commentCount: 3,
	// 	},
	// 	{
	// 		idx: 3,
	// 		content: '커뮤니티내용',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		commentCount: 4,
	// 	},
	// 	{
	// 		idx: 4,
	// 		content: '커뮤니티내용',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		commentCount: 5,
	// 	},
	// ];
	console.log(data);
	/**
	 *  @type {[{boardid,authorid,content,time,userlogo,replycount}]}
	 */
	const data_ = data.data.data;
	return (
		<div className={styles.community}>
			<div className={styles.header}>
				<div className={styles.label}>
					<h2>커뮤니티</h2>
					<button className={styles.linkIcon}>
						<Link href={`/user/${userid}/community`}>
							<svg viewBox='0 0 24 24' fill='none'>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									{' '}
									<path
										d='M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>{' '}
								</g>
							</svg>
						</Link>
					</button>
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
					{data_.map((item, index) => (
						<Link
							href={`/user/${item.authorid}/community/${item.boardid}`}
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
										<p className={styles.date}>{new Date(item.time).toLocaleDateString()}</p>
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
										<p>{item.replycount}</p>
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
