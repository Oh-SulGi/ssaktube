'use client';
import styles from './videos.module.css';
import LargeCard from '@/util/largeCard';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Videos({ userid }) {
	const [which, setwhich] = useState('video');
	const [cur, setcur] = useState(0);
	const [max, setmax] = useState(5);
	const [vw, setvw] = useState(window.innerWidth);
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
	const [sample, setsample] = useState([]);
	useEffect(() => {
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
		<div className={styles.video}>
			<div className={styles.header}>
				<div className={styles.label}>
					<h2>동영상</h2>
					<button className={styles.linkIcon}>
						<Link href={`/user/${userid}/video`}>
							<svg viewBox='0 0 24 24' fill='none'>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									<path
										d='M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>
								</g>
							</svg>
						</Link>
					</button>
				</div>
				<div className={styles.btns}>
					<div className={styles.btngroup}>
						<button
							className={styles.sortBtn}
							onClick={(e) => {
								setcur(0);
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
								setcur(0);
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
								setcur(0);
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
								setsample([...sample.sort((a, b) => b.recording_start - a.recording_start)]);
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
							style={{ width: `${100 / max}%`, minWidth: `${100 / max}%` }}
							starttime={item.recording_start}
							endtime={item.recording_end}
							duration={item.duration}
							isCategory={false}
						/>
					))}
				</div>
				<span
					className={styles.arrowNext}
					onClick={(e) => {
						setcur((cur) => cur + 1);
					}}
					style={{ display: cur + max >= sample.length ? 'none' : 'flex' }}
				>
					<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M13 20.5L18.5 15L13 9.5' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'></path>
					</svg>
				</span>
			</div>
		</div>
	);
}
