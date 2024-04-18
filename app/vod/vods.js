'use client';

import useSWR, { useSWRConfig } from 'swr';
import styles from './vods.module.css';
import LargeCard from '@/util/largeCard';

export default function Vods() {
	const { mutate } = useSWRConfig();
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/vods`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (isLoading) {
		return (
			<>
				<div>로딩중 입니다.</div>
			</>
		);
	}
	if (error) {
		return (
			<>
				<div>로딩중 에러가 발생했 습니다.</div>
			</>
		);
	}
	console.log(data.data);

	/**
	 * @type {{total_pages,data:[{replay_url,recording_start,recording_end,userid,viewer_count,idx,streamname,nickname,userlogo,duration}]}}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<div>
				<button
					onClick={(e) => {
						mutate(
							'/api/vods',
							async (data) => {
								const updatedData_ = await fetch('/api/vods?sort=popular', { cache: 'no-store' });
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
				<button
					onClick={(e) => {
						mutate(
							'/api/vods',
							async (data) => {
								const updatedData_ = await fetch('/api/vods?sort=latest', { cache: 'no-store' });
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
			</div>
			<section className={styles.cardlist}>
				{data_.data.map((live) => (
					<LargeCard
						id={live.idx}
						streamname={live.streamname}
						thumbnailurl={`${live.replay_url}media/thumbnails/thumb0.jpg`}
						userid={live.userid}
						userlogo={live.userlogo}
						username={live.nickname}
						viewerCount={live.viewer_count}
						type='vod'
						key={live.channelid}
						endtime={live.recording_end}
						starttime={live.recording_start}
						duration={live.duration}
					/>
				))}
			</section>
		</>
	);
}
