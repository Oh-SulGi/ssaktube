'use client';

import useSWR from 'swr';
import styles from './replays.module.css';
import LargeCard from '@/util/largeCard';

export default function Replays() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/replays`, fetcher, {
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

	/**
	 * @type {[{idx,userid,channelid,replayurl,recordingstart,recordingend,viewercount,streamname,nickname,userlogo}]}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<section className={styles.cardlist}>
				{data_.map((live) => (
					<LargeCard
						id={live.idx}
						streamname={live.streamname}
						thumbnailurl={`${live.replayurl}media/thumbnails/thumb0.jpg`}
						userid={live.userid}
						userlogo={live.userlogo}
						username={live.username}
						viewerCount={live.viewercount}
						type='replay'
						starttime={live.recordingstart}
						endtime={live.recordingend}
						key={live.channelid}
					/>
				))}
			</section>
		</>
	);
}
