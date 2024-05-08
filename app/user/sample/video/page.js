'use client';
import LargeCard from '@/util/largeCard';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/util/redux/hooks';
import { setUserTab } from '@/util/redux/reducers/ui';
import useSWR, { useSWRConfig } from 'swr';

export default function Page({ params }) {
	const userid = params.userid;

	const dispatch = useAppDispatch();

	const [which, setwhich] = useState('video');
	const [currentPage, setCurrentPage] = useState(1);
	const [sample, setsample] = useState([]);
	useEffect(() => {
		dispatch(setUserTab('video'));
		setsample(
			[
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
					streamname: 'VOD2',
					thumbnailurl: `/sample/22222.png`,
					userid: 'sample',
					userlogo: '/sample/11111.png',
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
					streamname: 'VOD3',
					thumbnailurl: `/sample/33333.png`,
					userid: 'sample',
					userlogo: '/sample/11111.png',
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
					streamname: 'replay1',
					thumbnailurl: `/sample/44444.png`,
					userid: 'sample',
					userlogo: '/sample/11111.png',
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
					streamname: 'replay2',
					thumbnailurl: `/sample/55555.png`,
					userid: 'sample',
					userlogo: '/sample/11111.png',
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
					streamname: 'replay3',
					thumbnailurl: `/sample/66666.png`,
					userid: 'sample',
					userlogo: '/sample/11111.png',
					username: '샘플스트리머이름',
					viewer_count: 777,
					type: 'replay',
					recording_start: 1714217882000,
					recording_end: 1714267882000,
					duration: '',
					isCategory: false,
				},
				{
					idx: 'sample',
					streamname: 'replay4',
					thumbnailurl: `/sample/77777.png`,
					userid: 'sample',
					userlogo: '/sample/11111.png',
					username: '샘플스트리머이름',
					viewer_count: 666,
					type: 'replay',
					recording_start: 1714304282000,
					recording_end: 1714324282000,
					duration: '',
					isCategory: false,
				},
			].sort((a, b) => b.recording_start - a.recording_start)
		);
	}, []);

	return (
		<>
			<div className={styles.main}>
				<div className={styles.header}>
					<div className={styles.btns}>
						<div className={styles.btngroup}>
							<button
								className={styles.sortBtn}
								onClick={(e) => {
									setsample(
										[
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
												streamname: 'VOD2',
												thumbnailurl: `/sample/22222.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'VOD3',
												thumbnailurl: `/sample/33333.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'replay1',
												thumbnailurl: `/sample/44444.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'replay2',
												thumbnailurl: `/sample/55555.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'replay3',
												thumbnailurl: `/sample/66666.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
												username: '샘플스트리머이름',
												viewer_count: 777,
												type: 'replay',
												recording_start: 1714217882000,
												recording_end: 1714267882000,
												duration: '',
												isCategory: false,
											},
											{
												idx: 'sample',
												streamname: 'replay4',
												thumbnailurl: `/sample/77777.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
												username: '샘플스트리머이름',
												viewer_count: 666,
												type: 'replay',
												recording_start: 1714304282000,
												recording_end: 1714324282000,
												duration: '',
												isCategory: false,
											},
										].sort((a, b) => b.recording_start - a.recording_start)
									);
								}}
							>
								전체
							</button>
							<button
								className={styles.sortBtn}
								onClick={(e) => {
									setsample(
										[
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
												streamname: 'VOD2',
												thumbnailurl: `/sample/22222.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'VOD3',
												thumbnailurl: `/sample/33333.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'replay1',
												thumbnailurl: `/sample/44444.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'replay2',
												thumbnailurl: `/sample/55555.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'replay3',
												thumbnailurl: `/sample/66666.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
												username: '샘플스트리머이름',
												viewer_count: 777,
												type: 'replay',
												recording_start: 1714217882000,
												recording_end: 1714267882000,
												duration: '',
												isCategory: false,
											},
											{
												idx: 'sample',
												streamname: 'replay4',
												thumbnailurl: `/sample/77777.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
												username: '샘플스트리머이름',
												viewer_count: 666,
												type: 'replay',
												recording_start: 1714304282000,
												recording_end: 1714324282000,
												duration: '',
												isCategory: false,
											},
										]
											.sort((a, b) => b.recording_start - a.recording_start)
											.filter((obj) => obj.type == 'replay')
									);
								}}
							>
								지난 방송
							</button>
							<button
								className={styles.sortBtn}
								onClick={(e) => {
									setsample(
										[
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
												streamname: 'VOD2',
												thumbnailurl: `/sample/22222.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'VOD3',
												thumbnailurl: `/sample/33333.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'replay1',
												thumbnailurl: `/sample/44444.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'replay2',
												thumbnailurl: `/sample/55555.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
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
												streamname: 'replay3',
												thumbnailurl: `/sample/66666.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
												username: '샘플스트리머이름',
												viewer_count: 777,
												type: 'replay',
												recording_start: 1714217882000,
												recording_end: 1714267882000,
												duration: '',
												isCategory: false,
											},
											{
												idx: 'sample',
												streamname: 'replay4',
												thumbnailurl: `/sample/77777.png`,
												userid: 'sample',
												userlogo: '/sample/11111.png',
												username: '샘플스트리머이름',
												viewer_count: 666,
												type: 'replay',
												recording_start: 1714304282000,
												recording_end: 1714324282000,
												duration: '',
												isCategory: false,
											},
										]
											.sort((a, b) => b.recording_start - a.recording_start)
											.filter((obj) => obj.type == 'vod')
									);
								}}
							>
								업로드한 영상
							</button>
						</div>
						<div className={styles.btngroup}>
							<button
								className={styles.sortBtn}
								onClick={(e) => {
									setsample([...sample].sort((a, b) => b.recording_start - a.recording_start));
								}}
							>
								최신순
							</button>
							<button
								className={styles.sortBtn}
								onClick={(e) => {
									setsample([...sample.sort((a, b) => b.viewer_count - a.viewer_count)]);
								}}
							>
								인기순
							</button>
						</div>
					</div>
				</div>
				<div className={styles.tabs}>
					{sample.map((item, index) => (
						<LargeCard
							id={item.idx}
							streamname={item.streamname}
							thumbnailurl={item.thumbnailurl}
							userid={item.userid}
							userlogo={item.userlogo}
							username={item.username}
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
				<div className={styles.pages}>
					<PagesBtn total_pages={1} current_page={currentPage} setCurrentPage={setCurrentPage} mutate={''} which={which} userid={userid} />
				</div>
			</div>
		</>
	);
}

function PagesBtn({ total_pages, current_page, setCurrentPage, which, mutate, userid }) {
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
				<button key={page} className={styles.sortBtn} style={{ fontWeight: current_page === page ? 'bold' : 'normal' }} onClick={(e) => {}}>
					{page}
				</button>
			))}
		</div>
	);
}
