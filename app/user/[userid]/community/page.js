'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useAppDispatch } from '@/util/redux/hooks';
import { useEffect, useRef, useState } from 'react';
import { setUserTab } from '@/util/redux/reducers/ui';
import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from 'next/navigation';
import MoreBtn from './morebtn';

// const data = [
// 	{
// 		idx: 0,
// 		content: '커뮤니티내용',
// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
// 		username: '유저이름',
// 		commentCount: 1,
// 		date: '',
// 	},
// 	{
// 		idx: 1,
// 		content: '커뮤니티내용',
// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
// 		username: '유저이름',
// 		commentCount: 2,
// 	},
// 	{
// 		idx: 2,
// 		content: '커뮤니티내용',
// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
// 		username: '유저이름',
// 		commentCount: 3,
// 	},
// 	{
// 		idx: 3,
// 		content: '커뮤니티내용',
// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
// 		username: '유저이름',
// 		commentCount: 4,
// 	},
// 	{
// 		idx: 4,
// 		content: '커뮤니티내용',
// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
// 		username: '유저이름',
// 		commentCount: 5,
// 	},
// ];

export default function Page({ params }) {
	const userid = params.userid;
	const dispatch = useAppDispatch();

	const [isme, setisme] = useState(false);
	const [set, setset] = useState(false);
	const [content, setcontent] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const { mutate } = useSWRConfig();
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/user/${userid}/community`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});

	useEffect(() => {
		dispatch(setUserTab('community'));

		fetch('/api/user/properties', { method: 'OPTIONS', cache: 'no-store' })
			.then((res) => res.json())
			.then((data) => {
				if (userid == data.data.userid) {
					setisme(true);
				}
			});
	}, []);

	if (isLoading) {
		return <div className={styles.main}>로딩중.</div>;
	}
	if (error) {
		return <div className={styles.main}>로딩중 에러가 발생했습니다.</div>;
	}
	/**
	 * @type {[{boardid,authorid,content,time,userlogo,replycount,username}]}}
	 */
	const data_ = data.data.data;
	console.log(data_);
	const total_pages = data.data.total_pages;

	return (
		<>
			<div className={styles.main}>
				{isme ? (
					<div>
						{set ? (
							<div className={styles.inputSection}>
								<div className={styles.replyinputSection}>
									<input
										className={styles.replyinput}
										type='text'
										value={content}
										onChange={(e) => {
											setcontent(e.target.value);
										}}
									/>
									<button
										className={styles.replyinputSubmit}
										onClick={(e) => {
											fetch('/api/board', {
												method: 'POST',
												cache: 'no-store',
												body: JSON.stringify({
													content,
													authorid: userid,
												}),
											})
												.then((res) => res.json())
												.then((data) => {
													alert('작성이 완료되었습니다.');
													console.log(data);
													window.location.reload();
												});
										}}
									>
										입력
									</button>
								</div>
							</div>
						) : (
							<button
								onClick={(e) => {
									setset(true);
								}}
							>
								새글 작성
							</button>
						)}
					</div>
				) : (
					''
				)}

				<div className={styles.tabs}>
					{data_.map((item, index) => (
						<>
							<div className={styles.container}>
								<Link key={index} className={styles.contentWrapper} href={`/user/${params.userid}/community/${item.boardid}`}>
									<div>
										<Image className={styles.streamerLogo} src={item.userlogo} width={36} height={36} alt='스트리머 로고' />
									</div>
									<div className={styles.content}>
										<div className={styles.info}>
											<div>
												<p className={styles.streamerName}>{item.username}</p>
												<p className={styles.date}>{new Date(item.time).toLocaleDateString()}</p>
											</div>
										</div>
										<div className={styles.detail}>{item.content}</div>
										<div className={styles.etc}>
											<div className={styles.comment}>
												<svg width='17px' height='17px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
													<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
													<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
													<g id='SVGRepo_iconCarrier'>
														<path d='M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z'></path>
													</g>
												</svg>
												<p>{item.replycount}</p>
											</div>
										</div>
									</div>
								</Link>
								{isme ? <MoreBtn boardid={item.boardid} /> : ''}
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
}
// function MoreBtn({ boardid }) {
// 	const [isopen, setisopen] = useState(false);
// 	return (
// 		<div className={styles.moreWrapper}>
// 			<button
// 				className={styles.more}
// 				onClick={(e) => {
// 					setisopen((isopen) => !isopen);
// 				}}
// 			>
// 				더보기
// 			</button>
// 			{isopen ? (
// 				<ul>
// 					<li
// 						className={styles.moreAction}
// 						onClick={(e) => {
// 							fetch(`/api/board/${boardid}`, {
// 								method: 'DELETE',
// 								cache: 'no-store',
// 							})
// 								.then((res) => res.json())
// 								.then((data) => {
// 									alert('삭제 완료되었습니다.');
// 									console.log(data);
// 									window.location.reload();
// 								});
// 						}}
// 					>
// 						삭제
// 					</li>
// 				</ul>
// 			) : (
// 				''
// 			)}
// 		</div>
// 	);
// }
