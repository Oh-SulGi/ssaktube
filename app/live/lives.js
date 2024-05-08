'use client';

import useSWR from 'swr';
import styles from './lives.module.css';
import LargeCard from '@/util/largeCard';
import { useEffect, useState } from 'react';

export default function Lives() {
	const [sample, setsample] = useState([]);
	useEffect(() => {
		setsample(
			[
				{
					username: '샘플스트리머1',
					thumbnailurl: '/sample/11111.png',
					channelid: 'sample',
					streamname: '샘플스트리밍1',
					viewerCount: 1,
					userlogo: '/sample/11111.png',
					userid: 'sample',
					category: 'Game',
				},
				{
					username: '샘플스트리머2',
					thumbnailurl: '/sample/22222.png',
					channelid: 'sample',
					streamname: '샘플스트리밍2',
					viewerCount: 2,
					userlogo: '/sample/22222.png',
					userid: 'sample',
					category: 'Just Chatting',
				},
				{
					username: '샘플스트리머3',
					thumbnailurl: '/sample/33333.png',
					channelid: 'sample',
					streamname: '샘플스트리밍3',
					viewerCount: 3,
					userlogo: '/sample/33333.png',
					userid: 'sample',
					category: 'Game',
				},
				{
					username: '샘플스트리머4',
					thumbnailurl: '/sample/44444.png',
					channelid: 'sample',
					streamname: '샘플스트리밍4',
					viewerCount: 5,
					userlogo: '/sample/44444.png',
					userid: 'sample',
					category: 'Just Chatting',
				},
				{
					username: '샘플스트리머5',
					thumbnailurl: '/sample/55555.png',
					channelid: 'sample',
					streamname: '샘플스트리밍5',
					viewerCount: 5,
					userlogo: '/sample/55555.png',
					userid: 'sample',
					category: 'Game',
				},
				{
					username: '샘플스트리머6',
					thumbnailurl: '/sample/66666.png',
					channelid: 'sample',
					streamname: '샘플스트리밍6',
					viewerCount: 6,
					userlogo: '/sample/66666.png',
					userid: 'sample',
					category: 'Just Chatting',
				},
				{
					username: '샘플스트리머7',
					thumbnailurl: '/sample/77777.png',
					channelid: 'sample',
					streamname: '샘플스트리밍7',
					viewerCount: 7,
					userlogo: '/sample/77777.png',
					userid: 'sample',
					category: 'Game',
				},
			].sort((a, b) => b.viewerCount - a.viewerCount)
		);
	}, []);

	return (
		<>
			{/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-45px', marginBottom: '30px' }}>
				<button className={styles.sortBtn}>인기순</button>
				<button className={styles.sortBtn}>최신순</button>
			</div> */}
			<div style={{ marginBottom: '30px' }}></div>
			<section className={styles.cardlist}>
				{sample.map((live) => (
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
