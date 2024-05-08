'use client';
import Image from 'next/image';
import styles from './comment.module.css';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import MoreBtnr from '../morebtnr';

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

export default function Comments({ idx, myid }) {
	const [newComment, setnewComment] = useState('');
	const fetcher = (...args) => fetch(...args, { method: 'POST', cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading, mutate } = useSWR(`/api/community/${idx}/reply`, fetcher, {
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
	/**
	 * @type {[{replyid,boardid,parentreplyid,reply,time,userlogo,authorid}]}
	 */
	const data_r = data.data;
	const data_o = {};
	data_r.forEach((reply) => {
		if (reply.parentreplyid == null) {
			const nreply = { ...reply, rereply: [] };
			data_o[reply.replyid] = nreply;
		} else {
			data_o[reply.parentreplyid].rereply.push(reply);
		}
	});
	const data_ = Object.values(data_o);
	console.log(data_);
	return (
		<div className={styles.section}>
			<div className={styles.navSection}>
				<p className={styles.label}>댓글 {data_.length}개</p>
				<div className={styles.resetBtnGroup}>
					<button
						className={styles.sortBtn}
						onClick={(e) => {
							mutate({}, { populateCache: false });
						}}
					>
						리셋
					</button>
				</div>
				<div className={styles.orderBtnGroup}></div>
			</div>
			<div className={styles.inputSection}>
				<div className={styles.replyinputSection}>
					<input
						className={styles.replyinput}
						type='text'
						value={newComment}
						onChange={(e) => {
							setnewComment(e.target.value);
						}}
						disabled={myid ? false : true}
					/>
					<button
						className={styles.replyinputSubmit}
						onClick={(e) => {
							fetch('/api/reply', {
								method: 'POST',
								cache: 'no-store',
								body: JSON.stringify({
									boardid: idx,
									authorid: myid,
									reply: newComment,
									parentreplyid: null,
								}),
							})
								.then((res) => res.json())
								.then((data) => {
									setnewComment('');
									mutate({}, { populateCache: false });
								});
						}}
					>
						입력
					</button>
				</div>
			</div>
			<div className={styles.commentsSection}>
				{data_.map((comment, index) => (
					// <div className={styles.comment} key={index}>
					// 	<Image src={comment.userlogo} width={36} height={36} alt='사용자로고' />
					// 	<div></div>
					// </div>
					<div key={index} className={styles.comment}>
						<div>
							<Image className={styles.streamerLogo} src={comment.userlogo} width={36} height={36} alt='스트리머 로고' />
						</div>
						<div className={styles.content}>
							<div className={styles.info}>
								<div>
									<span className={styles.streamerName}>{comment.username}</span>
									<span className={styles.date}>{new Date(comment.time).toLocaleDateString()}</span>
								</div>
								{myid == comment.authorid ? <MoreBtnr replyid={comment.replyid} /> : ''}
							</div>
							<div className={styles.detail}>{comment.reply}</div>
							<div className={styles.replySection}>
								{comment.rereply.length == 0 ? (
									<ReplyInput boardid={idx} authorid={myid} parentreplyid={comment.replyid} mutate={mutate} />
								) : (
									<details id='detail'>
										<summary>댓글보기</summary>

										{comment.rereply.map((item, index) => (
											<div key={index} className={styles.comment}>
												<div>
													<Image className={styles.streamerLogo} src={item.userlogo} width={36} height={36} alt='스트리머 로고' />
												</div>
												<div className={styles.content}>
													<div className={styles.info}>
														<div>
															<span className={styles.streamerName}>{item.username}</span>
															<span className={styles.date}>{new Date(item.time).toLocaleDateString()}</span>
														</div>
														{myid == item.authorid ? <MoreBtnr replyid={item.replyid} /> : ''}
													</div>
													<div className={styles.detail}>{item.reply}</div>
												</div>
											</div>
										))}
										<div className={styles.replySection}>
											<ReplyInput boardid={idx} authorid={myid} parentreplyid={comment.replyid} mutate={mutate} />
										</div>
									</details>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function ReplyInput({ boardid, authorid, parentreplyid, mutate }) {
	const [nreply, setnreply] = useState('');
	const [set, setset] = useState(false);
	return set ? (
		<div className={styles.inputSection}>
			<div className={styles.replyinputSection}>
				<input
					className={styles.replyinput}
					type='text'
					value={nreply}
					onChange={(e) => {
						setnreply(e.target.value);
					}}
					disabled={authorid ? false : true}
				/>
				<button
					className={styles.replyinputSubmit}
					onClick={(e) => {
						fetch('/api/reply', {
							method: 'POST',
							cache: 'no-store',
							body: JSON.stringify({
								boardid,
								authorid,
								reply: nreply,
								parentreplyid,
							}),
						})
							.then((res) => res.json())
							.then((data) => {
								setnreply('');
								mutate({}, { populateCache: false });
								setset(false);
							});
					}}
				>
					입력
				</button>
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
