'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/util/redux/hooks';
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
	const userid_ = params.userid;
	const { userid } = useAppSelector((state) => state.login);
	const dispatch = useAppDispatch();
	const [isme, setisme] = useState(true);
	const [set, setset] = useState(false);
	const [content, setcontent] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const data_ = [
		{
			boardid: 0,
			content: '샘플커뮤니티내용1',
			userlogo: '/sample/11111.png',
			username: '샘플스트리머이름',
			replycount: 1,
			time: 1714304282000,
			authorid: 'sample',
		},
		{
			boardid: 1,
			content: '샘플커뮤니티내용2',
			userlogo: '/sample/11111.png',
			username: '샘플스트리머이름',
			replycount: 2,
			time: 1714131482000,
			authorid: 'sample',
		},
		{
			boardid: 2,
			content: '샘플커뮤니티내용3',
			userlogo: '/sample/11111.png',
			username: '샘플스트리머이름',
			replycount: 3,
			time: 1714045082000,
			authorid: 'sample',
		},
		{
			boardid: 3,
			content: '샘플커뮤니티내용4',
			userlogo: '/sample/11111.png',
			username: '샘플스트리머이름',
			replycount: 4,
			time: 1713958682000,
			authorid: 'sample',
		},
		{
			boardid: 4,
			content: '샘플커뮤니티내용5',
			userlogo: '/sample/11111.png',
			username: '샘플스트리머이름',
			replycount: 5,
			time: 1713872282000,
			authorid: 'sample',
		},
	];
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
											alert('작성이 완료되었습니다.');
											window.location.reload();
										}}
									>
										입력
									</button>
								</div>
							</div>
						) : (
							<button
								className={styles.sortBtn}
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
								<Link key={index} className={styles.contentWrapper} href={`/user/sample/community/${item.boardid}`}>
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
				<PagesBtn current_page={currentPage} setCurrentPage={setCurrentPage} total_pages={1} userid_={userid_} />
			</div>
		</>
	);
}

function PagesBtn({ total_pages, current_page, setCurrentPage, mutate, userid_ }) {
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
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', maxWidth: '960px' }}>
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
