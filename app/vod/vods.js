'use client';

import useSWR, { useSWRConfig } from 'swr';
import styles from './vods.module.css';
import LargeCard from '@/util/largeCard';
import { useEffect, useState } from 'react';

export default function Vods() {
	const [which, setwhich] = useState('popular');
	const [currentPage, setCurrentPage] = useState(1);
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
				<div>로딩중 에러가 발생했습니다.</div>
			</>
		);
	}
	console.log(data.data);

	/**
	 * @type {{total_pages,data:[{replay_url,recording_start,recording_end,userid,viewer_count,idx,streamname,username,userlogo,duration}]}}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-45px', marginBottom: '30px' }}>
				<button
					className={styles.sortBtn}
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
						setwhich('popular');
					}}
				>
					인기순
				</button>
				<button
					className={styles.sortBtn}
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
						setwhich('latest');
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
						username={live.username}
						viewerCount={live.viewer_count}
						type='vod'
						key={live.channelid}
						endtime={live.recording_end}
						starttime={live.recording_start}
						duration={live.duration}
					/>
				))}
			</section>
			<PagesBtn total_pages={data_.total_pages} current_page={currentPage} setCurrentPage={setCurrentPage} mutate={mutate} which={which} />
		</>
	);
}

function PagesBtn({ total_pages, current_page, setCurrentPage, mutate, which }) {
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
						mutate(
							`/api/vods`,
							async (data) => {
								const updatedData_ = await fetch(`/api/vods?sort=${which}&page=${page}`, { method: 'POST', cache: 'no-store' });
								const updatedData = await updatedData_.json();
								console.log(data);
								console.log(updatedData);
								return updatedData;
							},
							{ revalidate: false }
						);
					}}
				>
					{page}
				</button>
			))}
		</div>
	);
}
