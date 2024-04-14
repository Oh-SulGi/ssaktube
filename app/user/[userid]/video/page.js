'use client';
import LargeCard from '@/util/largeCard';
import styles from './page.module.css';
import { useEffect } from 'react';
import { useAppDispatch } from '@/util/redux/hooks';
import { setUserTab } from '@/util/redux/reducers/ui';

export default function Page() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setUserTab('video'));
	}, []);

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
		<>
			<div className={styles.main}>
				<div className={styles.header}>
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
				<div className={styles.tabs}>
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
						/>
					))}
				</div>
			</div>
		</>
	);
}
