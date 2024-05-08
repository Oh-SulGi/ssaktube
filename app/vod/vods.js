'use client';

import useSWR, { useSWRConfig } from 'swr';
import styles from './vods.module.css';
import LargeCard from '@/util/largeCard';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/util/redux/hooks';

export default function Vods() {
	const [currentPage, setCurrentPage] = useState(1);
	const [sample, setsample] = useState([]);

	useEffect(() => {
		setsample(
			[
				{
					idx: 'sample',
					streamname: 'VOD2',
					thumbnailurl: `/sample/22222.png`,
					userid: 'sample',
					userlogo: '/sample/22222.png',
					username: '샘플스트리머이름',
					viewer_count: 333,
					type: 'vod',
					recording_start: 1714131482000,
					recording_end: 0,
					duration: 100000,
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'VOD1',
					thumbnailurl: `/sample/11111.png`,
					userid: 'sample',
					userlogo: '/sample/11111.png',
					username: '샘플스트리머이름',
					viewer_count: 111,
					type: 'vod',
					recording_start: 1714045082000,
					recording_end: 0,
					duration: 100000,
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'VOD5',
					thumbnailurl: `/sample/55555.png`,
					userid: 'sample',
					userlogo: '/sample/55555.png',
					username: '샘플스트리머이름',
					viewer_count: 555,
					type: 'replay',
					recording_start: 1714045082000,
					recording_end: 1714055082000,
					duration: '',
					isCategory: false,
				},

				{
					idx: 'sample',
					streamname: 'VOD4',
					thumbnailurl: `/sample/44444.png`,
					userid: 'sample',
					userlogo: '/sample/44444.png',
					username: '샘플스트리머이름',
					viewer_count: 444,
					type: 'replay',
					recording_start: 1713785882000,
					recording_end: 1713825882000,
					duration: '',
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'VOD3',
					thumbnailurl: `/sample/33333.png`,
					userid: 'sample',
					userlogo: '/sample/33333.png',
					username: '샘플스트리머이름',
					viewer_count: 222,
					type: 'vod',
					recording_start: 1714217882000,
					recording_end: 0,
					duration: 100000,
					isCategory: false,
				},

				{
					idx: 'sample',
					streamname: 'VOD7',
					thumbnailurl: `/sample/77777.png`,
					userid: 'sample',
					userlogo: '/sample/77777.png',
					username: '샘플스트리머이름',
					viewer_count: 666,
					type: 'replay',
					recording_start: 1714304282000,
					recording_end: 1714324282000,
					duration: '',
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'VOD6',
					thumbnailurl: `/sample/66666.png`,
					userid: 'sample',
					userlogo: '/sample/66666.png',
					username: '샘플스트리머이름',
					viewer_count: 777,
					type: 'replay',
					recording_start: 1714217882000,
					recording_end: 1714267882000,
					duration: '',
					isCategory: false,
				},
			].sort((a, b) => b.recording_start - a.recording_start)
		);
	}, []);
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-45px', marginBottom: '30px' }}>
				<button
					className={styles.sortBtn}
					onClick={(e) => {
						setsample([...sample.sort((a, b) => b.viewer_count - a.viewer_count)]);
					}}
				>
					인기순
				</button>
				<button
					className={styles.sortBtn}
					onClick={(e) => {
						setsample([...sample].sort((a, b) => b.recording_start - a.recording_start));
					}}
				>
					최신순
				</button>
			</div>
			<section className={styles.cardlist}>
				{sample.map((live, index) => (
					<LargeCard
						id={live.idx}
						streamname={live.streamname}
						thumbnailurl={live.thumbnailurl}
						userid={live.userid}
						userlogo={live.userlogo}
						username={live.username}
						viewerCount={live.viewer_count}
						type='vod'
						key={index}
						endtime={live.recording_end}
						starttime={live.recording_start}
						duration={live.duration}
					/>
				))}
			</section>
			<PagesBtn total_pages={1} current_page={currentPage} setCurrentPage={setCurrentPage} />
		</>
	);
}

function PagesBtn({ total_pages, current_page, setCurrentPage }) {
	const [pageGroup, setPageGroup] = useState([]);
	useEffect(() => {
		const pagesPerGroup = 10;
		const currentGroupIndex = Math.floor((current_page - 1) / pagesPerGroup);
		const startPage = currentGroupIndex * pagesPerGroup + 1;
		const endPage = Math.min(startPage + pagesPerGroup - 1, total_pages);

		const pages = [];
		for (let page = startPage; page <= endPage; page++) {
			pages.push(page);
		}

		setPageGroup(pages);
	}, [current_page, total_pages]);
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			{pageGroup.map((page) => (
				<button
					key={page}
					className={styles.sortBtn}
					style={{ fontWeight: current_page === page ? 'bold' : 'normal' }}
					onClick={(e) => {
						setCurrentPage(page);
					}}
				>
					{page}
				</button>
			))}
		</div>
	);
}
