'use client';
import Image from 'next/image';
import styles from './comment.module.css';
import { useState } from 'react';
import useSWR from 'swr';
// /api/community/{boardid}
export default function Comments({ idx }) {
	// const data = [
	// 	{
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		userid: '22',
	// 		date: '',
	// 		content: '댓글1',
	// 		reply: [
	// 			{
	// 				userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 				username: '유저이름',
	// 				userid: '22',
	// 				date: '',
	// 				content: '대댓글1',
	// 			},
	// 			{
	// 				userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 				username: '유저이름',
	// 				userid: '22',
	// 				date: '',
	// 				content: '대댓글2',
	// 			},
	// 			{
	// 				userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 				username: '유저이름',
	// 				userid: '22',
	// 				date: '',
	// 				content: '대댓글3',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		userid: '22',
	// 		date: '',
	// 		content: '댓글2',
	// 		reply: [
	// 			{
	// 				userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 				username: '유저이름',
	// 				userid: '22',
	// 				date: '',
	// 				content: '대댓글1',
	// 			},
	// 			{
	// 				userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 				username: '유저이름',
	// 				userid: '22',
	// 				date: '',
	// 				content: '대댓글2',
	// 			},
	// 			{
	// 				userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 				username: '유저이름',
	// 				userid: '22',
	// 				date: '',
	// 				content: '대댓글3',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/7aa7a4d3-2787-4f8c-afda-d2943e5b12a2.jpg',
	// 		username: '유저이름',
	// 		userid: '22',
	// 		date: '',
	// 		content: '댓글3',
	// 		reply: [],
	// 	},
	// ];
	const fetcher = (...args) => fetch(...args, { method: 'POST', cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/community/${idx}`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (isLoading) {
		return <></>;
	}
	if (error) {
		return <></>;
	}
	console.log(data);
	return (
		// <div className={styles.section}>
		// 	<div className={styles.navSection}>
		// 		<p className={styles.label}>댓글 {data.length}</p>
		// 		<div className={styles.resetBtnGroup}>
		// 			<button>리셋</button>
		// 		</div>
		// 		<div className={styles.orderBtnGroup}>
		// 			<button>등록순</button>
		// 			<button>인기순</button>
		// 			<button>최신순</button>
		// 		</div>
		// 	</div>
		// 	<div className={styles.inputSection}>
		// 		<div className={styles.replyinputSection}>
		// 			<input className={styles.replyinput} type='text' />
		// 			<button className={styles.replyinputSubmit}>입력</button>
		// 		</div>
		// 	</div>
		// 	<div className={styles.commentsSection}>
		// 		{data.map((comment, index) => (
		// 			// <div className={styles.comment} key={index}>
		// 			// 	<Image src={comment.userlogo} width={36} height={36} alt='사용자로고' />
		// 			// 	<div></div>
		// 			// </div>
		// 			<div key={index} className={styles.comment}>
		// 				<div>
		// 					<Image className={styles.streamerLogo} src={comment.userlogo} width={36} height={36} alt='스트리머 로고' />
		// 				</div>
		// 				<div className={styles.content}>
		// 					<div className={styles.info}>
		// 						<div>
		// 							<span className={styles.streamerName}>{comment.username}</span>
		// 							<span className={styles.date}>24.2.20</span>
		// 						</div>
		// 						<button>더보기</button>
		// 					</div>
		// 					<div className={styles.detail}>{comment.content}</div>
		// 					<div className={styles.replySection}>
		// 						{comment.reply.length == 0 ? (
		// 							<ReplyInput />
		// 						) : (
		// 							<details id='detail'>
		// 								<summary>댓글보기</summary>

		// 								{comment.reply.map((item, index) => (
		// 									<div key={index} className={styles.comment}>
		// 										<div>
		// 											<Image className={styles.streamerLogo} src={comment.userlogo} width={36} height={36} alt='스트리머 로고' />
		// 										</div>
		// 										<div className={styles.content}>
		// 											<div className={styles.info}>
		// 												<div>
		// 													<span className={styles.streamerName}>{comment.username}</span>
		// 													<span className={styles.date}>24.2.20</span>
		// 												</div>
		// 												<button>더보기</button>
		// 											</div>
		// 											<div className={styles.detail}>{comment.content}</div>
		// 										</div>
		// 									</div>
		// 								))}
		// 								<div className={styles.replySection}>
		// 									<ReplyInput />
		// 								</div>
		// 							</details>
		// 						)}
		// 					</div>
		// 				</div>
		// 			</div>
		// 		))}
		// 	</div>
		// </div>
		<div>일단완료</div>
	);
}

function ReplyInput() {
	const [set, setset] = useState(false);
	return set ? (
		<div className={styles.inputSection}>
			<div className={styles.replyinputSection}>
				<input className={styles.replyinput} type='text' />
				<button className={styles.replyinputSubmit}>입력</button>
			</div>
		</div>
	) : (
		<p
			onClick={(e) => {
				setset(true);
			}}
		>
			댓글쓰기
		</p>
	);
}
