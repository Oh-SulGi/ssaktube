'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Comments from './comment';
import { useRouter } from 'next/navigation';
import { setUserTab } from '@/util/redux/reducers/ui';
import { useAppDispatch, useAppSelector } from '@/util/redux/hooks';
import { useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import MoreBtn from '../morebtn';

// const data = {
// 	idx: 0,
// 	content: '커뮤니티내용',
// 	userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
// 	username: '유저이름',
// 	commentCount: 1,
// 	date: '',
// };

export default function Page({ params }) {
	const userid_ = params.userid;
	const idx = params.idx;
	const router = useRouter();
	const dispatch = useAppDispatch();

	const { userid } = useAppSelector((state) => state.login);

	useEffect(() => {
		dispatch(setUserTab('community'));
	}, []);

	const fetcher = (...args) => fetch(...args, { cache: 'no-store', method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/community/${params.idx}`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (isLoading) {
		return <div className={styles.main}>로딩중.</div>;
	}
	if (error) {
		return <div className={styles.main}>로딩중 에러가 발생했습니다.</div>;
	}
	/**
	 * @type {{boardid,time,userlogo,username,authorid,content,replycount}}
	 */
	const data_ = data.data[0];
	console.log(data_);
	return (
		<>
			<div className={styles.main}>
				<div>
					<button
						onClick={(e) => {
							router.push(`/user/${params.userid}/community`);
						}}
					>
						목록
					</button>
				</div>
				<div className={styles.contentWrapper}>
					<div className={styles.content}>
						<div className={styles.info}>
							<div className={styles.streamer}>
								<Image className={styles.streamerLogo} src={data_.userlogo} width={50} height={50} alt='스트리머 로고' />
								<div>
									<p className={styles.streamerName}>{data_.username}</p>
									<p className={styles.date}>{new Date(data_.time).toLocaleDateString()}</p>
								</div>
							</div>
							{userid_ == userid ? <MoreBtn boardid={idx} /> : ''}
						</div>
						<div className={styles.detail}>{data_.content}</div>
						<div className={styles.etc}>
							<div className={styles.comment}>
								<svg width='17px' height='17px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
									<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
									<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
									<g id='SVGRepo_iconCarrier'>
										<path d='M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z'></path>
									</g>
								</svg>
								<p>{data_.replycount}</p>
							</div>
						</div>
					</div>
				</div>
				<Comments idx={idx} myid={userid} />
			</div>
		</>
	);
}
