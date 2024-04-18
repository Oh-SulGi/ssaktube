'use client';
import LargeCard from '@/util/largeCard';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/util/redux/hooks';
import { setUserTab } from '@/util/redux/reducers/ui';
import useSWR, { useSWRConfig } from 'swr';

export default function Page({ params }) {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setUserTab('video'));
	}, []);

	// const data = [
	// 	{
	// 		id: 'BB7tICcZh3OK',
	// 		streamname: '방송이름',
	// 		thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
	// 		userid: '',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		viewerCount: 1,
	// 	},
	// 	{
	// 		id: 'BB7tICcZh3OK',
	// 		streamname: '방송이름',
	// 		thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
	// 		userid: '',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		viewerCount: 2,
	// 	},
	// 	{
	// 		id: 'BB7tICcZh3OK',
	// 		streamname: '방송이름',
	// 		thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
	// 		userid: '',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		viewerCount: 3,
	// 	},
	// 	{
	// 		id: 'BB7tICcZh3OK',
	// 		streamname: '방송이름',
	// 		thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
	// 		userid: '',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		viewerCount: 4,
	// 	},
	// 	{
	// 		id: 'BB7tICcZh3OK',
	// 		streamname: '방송이름',
	// 		thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
	// 		userid: '',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		viewerCount: 5,
	// 	},
	// 	{
	// 		id: 'BB7tICcZh3OK',
	// 		streamname: '방송이름',
	// 		thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
	// 		userid: '',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		viewerCount: 6,
	// 	},
	// 	{
	// 		id: 'BB7tICcZh3OK',
	// 		streamname: '방송이름',
	// 		thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
	// 		userid: '',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		viewerCount: 7,
	// 	},
	// 	{
	// 		id: 'BB7tICcZh3OK',
	// 		streamname: '방송이름',
	// 		thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
	// 		userid: '',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		viewerCount: 8,
	// 	},
	// 	{
	// 		id: 'BB7tICcZh3OK',
	// 		streamname: '방송이름',
	// 		thumbnailurl: `https://ivs-stream-live-4321.s3.ap-northeast-1.amazonaws.com/ivs/v1/891377305172/BB7tICcZh3OK/2024/4/14/0/58/7KBFvRJ9AWEO/media/latest_thumbnail/thumb.jpg`,
	// 		userid: '',
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		viewerCount: 9,
	// 	},
	// ];
	const userid = params.userid;
	const { mutate } = useSWRConfig();
	const [which, setwhich] = useState('video');
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/user/${userid}/video`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (isLoading) {
		return <></>;
	}
	if (error) {
		return <></>;
	}
	/**
	 * @type {[{replay_url,recording_start,recording_end,viewer_count,userid,idx,streamname}]}}
	 */
	const data_ = data.data.data;
	console.log(data_);
	return (
		<>
			<div className={styles.main}>
				<div className={styles.header}>
					<div className={styles.btns}>
						<div className={styles.btngroup}>
							<button
								onClick={(e) => {
									setwhich('video');
									mutate(
										`/api/user/${userid}/video`,
										async (data) => {
											const updatedData_ = await fetch(`/api/user/${userid}/video?sort=latest`, { method: 'POST', cache: 'no-store' });
											const updatedData = await updatedData_.json();
											console.log(data);
											console.log(updatedData);
											return updatedData;
										},
										{ revalidate: false }
									);
								}}
							>
								전체
							</button>
							<button
								onClick={(e) => {
									setwhich('replay');
									mutate(
										`/api/user/${userid}/video`,
										async (data) => {
											const updatedData_ = await fetch(`/api/user/${userid}/replay?sort=latest`, { method: 'POST', cache: 'no-store' });
											const updatedData = await updatedData_.json();
											console.log(data);
											console.log(updatedData);
											return updatedData;
										},
										{ revalidate: false }
									);
								}}
							>
								지난 방송
							</button>
							<button
								onClick={(e) => {
									setwhich('vod');
									mutate(
										`/api/user/${userid}/video`,
										async (data) => {
											const updatedData_ = await fetch(`/api/user/${userid}/vod?sort=latest`, { method: 'POST', cache: 'no-store' });
											const updatedData = await updatedData_.json();
											console.log(data);
											console.log(updatedData);
											return updatedData;
										},
										{ revalidate: false }
									);
								}}
							>
								업로드한 영상
							</button>
						</div>
						<div className={styles.btngroup}>
							<button
								onClick={(e) => {
									mutate(
										`/api/user/${userid}/video`,
										async (data) => {
											const updatedData_ = await fetch(`/api/user/${userid}/${which}?sort=latest`, { method: 'POST', cache: 'no-store' });
											const updatedData = await updatedData_.json();
											console.log(data);
											console.log(updatedData);
											return updatedData;
										},
										{ revalidate: false }
									);
								}}
							>
								최신순
							</button>
							<button
								onClick={(e) => {
									mutate(
										`/api/user/${userid}/video`,
										async (data) => {
											const updatedData_ = await fetch(`/api/user/${userid}/${which}?sort=popular`, {
												method: 'POST',
												cache: 'no-store',
											});
											console.log(updatedData_);
											const updatedData = await updatedData_.json();
											console.log(data);
											console.log(updatedData);
											return updatedData;
										},
										{ revalidate: false }
									);
								}}
							>
								인기순
							</button>
						</div>
					</div>
				</div>
				<div className={styles.tabs}>
					{data_.map((item, index) => (
						<LargeCard
							id={item.idx}
							streamname={item.streamname}
							thumbnailurl={`${item.replay_url}media/thumbnails/thumb0.jpg`}
							userid={item.userid}
							userlogo={`https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/${item.userid}.jpg`}
							username={item.nickname}
							viewerCount={item.viewer_count}
							type={item.duration ? 'vod' : 'replay'}
							key={index}
							starttime={item.recording_start}
							endtime={item.recording_end}
							duration={item.duration}
							isCategory={false}
						/>
					))}
				</div>
			</div>
		</>
	);
}
