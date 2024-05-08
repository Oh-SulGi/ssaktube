'use client';

import useSWR from 'swr';
import styles from './replays.module.css';
import LargeCard from '@/util/largeCard';
import { useEffect, useState } from 'react';

export default function Replays() {
	const [sample, setsample] = useState([]);

	useEffect(() => {
		setsample(
			[
				{
					idx: 'sample',
					streamname: 'REPLAY1',
					thumbnailurl: `/sample/11111.png`,
					userid: 'sample',
					userlogo: '/sample/11111.png',
					username: '샘플스트리머이름',
					viewercount: 111,
					type: 'REPLAY',

					recordingstart: 1713785882000,
					recordingend: 1713825882000,
					duration: 100000,
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'REPLAY2',
					thumbnailurl: `/sample/22222.png`,
					userid: 'sample',
					userlogo: '/sample/22222.png',
					username: '샘플스트리머이름',
					viewercount: 333,
					type: 'REPLAY',
					recordingstart: 1714131482000,
					recordingend: 1714131912000,
					duration: 100000,
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'REPLAY3',
					thumbnailurl: `/sample/33333.png`,
					userid: 'sample',
					userlogo: '/sample/33333.png',
					username: '샘플스트리머이름',
					viewercount: 222,
					type: 'REPLAY',
					recordingstart: 1714217882000,
					recordingend: 1714227882000,
					duration: 100000,
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'REPLAY4',
					thumbnailurl: `/sample/44444.png`,
					userid: 'sample',
					userlogo: '/sample/44444.png',
					username: '샘플스트리머이름',
					viewercount: 444,
					type: 'replay',
					recordingstart: 1714045082000,
					recordingend: 1714045182000,
					duration: '',
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'REPLAY5',
					thumbnailurl: `/sample/55555.png`,
					userid: 'sample',
					userlogo: '/sample/55555.png',
					username: '샘플스트리머이름',
					viewercount: 555,
					type: 'replay',
					recordingstart: 1714304282000,
					recordingend: 1714324282000,

					duration: '',
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'REPLAY6',
					thumbnailurl: `/sample/66666.png`,
					userid: 'sample',
					userlogo: '/sample/66666.png',
					username: '샘플스트리머이름',
					viewercount: 777,
					type: 'replay',

					recordingstart: 1714217882000,
					recordingend: 1714267882000,
					duration: '',
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'REPLAY7',
					thumbnailurl: `/sample/77777.png`,
					userid: 'sample',
					userlogo: '/sample/77777.png',
					username: '샘플스트리머이름',
					viewercount: 666,
					type: 'replay',
					recordingstart: 1714045082000,
					recordingend: 1714055082000,
					duration: '',
					isCategory: false,
				},
			].sort((a, b) => b.recordingstart - a.recordingstart)
		);
	}, []);
	return (
		<>
			<div style={{ marginBottom: '30px' }}></div>
			<section className={styles.cardlist}>
				{sample.map((live) => (
					<LargeCard
						id={live.idx}
						streamname={live.streamname}
						thumbnailurl={live.thumbnailurl}
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
