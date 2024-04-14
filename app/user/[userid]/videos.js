'use client';
import useSWR from 'swr';
import styles from './videos.module.css';
import LargeCard from '@/util/largeCard';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/util/redux/hooks';

export default function Videos({ userid }) {
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
	const [max, setmax] = useState(5);
	const [vw, setvw] = useState(window.innerWidth);
	const dispatch = useAppDispatch();
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
		setmax(5);
		if (window.innerWidth < 1600) {
			setmax(4);
		}
		if (window.innerWidth < 1280) {
			setmax(3);
		}
	}, [vw]);

	const data = [
		{
			id: 'BB7tICcZh3OK',
			streamname: '방송이름',
			thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
			userid: '',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			viewerCount: 1,
		},
		{
			id: 'BB7tICcZh3OK',
			streamname: '방송이름',
			thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
			userid: '',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			viewerCount: 2,
		},
		{
			id: 'BB7tICcZh3OK',
			streamname: '방송이름',
			thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
			userid: '',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			viewerCount: 3,
		},
		{
			id: 'BB7tICcZh3OK',
			streamname: '방송이름',
			thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
			userid: '',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			viewerCount: 4,
		},
		{
			id: 'BB7tICcZh3OK',
			streamname: '방송이름',
			thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
			userid: '',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			viewerCount: 5,
		},
		{
			id: 'BB7tICcZh3OK',
			streamname: '방송이름',
			thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
			userid: '',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			viewerCount: 6,
		},
		{
			id: 'BB7tICcZh3OK',
			streamname: '방송이름',
			thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
			userid: '',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			viewerCount: 7,
		},
		{
			id: 'BB7tICcZh3OK',
			streamname: '방송이름',
			thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
			userid: '',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			viewerCount: 8,
		},
		{
			id: 'BB7tICcZh3OK',
			streamname: '방송이름',
			thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
			userid: '',
			userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
			username: '유저이름',
			viewerCount: 9,
		},
	];
	return (
		<div className={styles.video}>
			<div className={styles.header}>
				<div className={styles.label}>
					<h2>동영상</h2>
					<button>바로가기버튼</button>
				</div>
				<div className={styles.btns}>
					<div className={styles.btngroup}>
						<button>전체</button>
						<button>지난 방송</button>
						<button>업로드한 영상</button>
					</div>
					<div className={styles.btngroup}>
						<button>최신순</button>
						<button>인기순</button>
					</div>
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
						<LargeCard
							id={item.id}
							streamname={item.streamname}
							thumbnailurl={item.thumbnailurl}
							userid={item.userid}
							userlogo={item.userlogo}
							username={item.username}
							viewerCount={item.viewerCount}
							type='replay'
							key={index}
							style={{ width: `${100 / max}%`, minWidth: `${100 / max}%` }}
						/>
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
