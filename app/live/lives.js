'use client';

import useSWR from 'swr';
import styles from './lives.module.css';
import LargeCard from '@/util/largeCard';

export default function Lives() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/lives`, fetcher, {
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
				<div>로딩중 에러가 발생했 습니다..</div>
			</>
		);
	}
	/**
	 * @type {{page_channels:[{channelid,streamname,streamurl,userlogo,username,thumbnailurl,viewerCount}]}}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-45px', marginBottom: '30px' }}>
				<button className={styles.sortBtn}>인기순</button>
				<button className={styles.sortBtn}>최신순</button>
			</div>
			<section className={styles.cardlist}>
				{data_.page_channels.map((live) => (
					<LargeCard
						id={live.channelid}
						streamname={live.streamname}
						thumbnailurl={live.thumbnailurl}
						userid={live.userid}
						userlogo={live.userlogo}
						username={live.username}
						viewerCount={live.viewerCount}
						key={live.channelid}
						category={live.category}
					/>
				))}
			</section>
		</>
	);
}
