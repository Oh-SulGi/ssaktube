'use client';
import Image from 'next/image';
import styles from './comment.module.css';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import MoreBtnr from '../morebtnr';

export default function Comments({ idx, myid }) {
	const [newComment, setnewComment] = useState('');
	const [sample, setsample] = useState([]);
	useEffect(() => {
		setsample([
			{
				userlogo: '/sample/11111.png',
				username: '샘플유저이름1',
				userid: '22',
				time: 1714313757000,
				reply: '샘플 댓글1',
				rereply: [
					{
						userlogo: '/sample/22222.png',
						username: '샘플유저이름2',
						userid: '22',
						time: 1714313757000,
						reply: '샘플 대댓글1',
					},
					{
						userlogo: '/sample/33333.png',
						username: '샘플유저이름3',
						userid: '22',
						time: 1714313757000,
						reply: '샘플 대댓글2',
					},
					{
						userlogo: '/sample/33333.png',
						username: '샘플유저이름3',
						userid: '22',
						time: 1714313757000,
						reply: '샘플 대댓글3',
					},
				],
			},
			{
				userlogo: '/sample/44444.png',
				username: '샘플유저이름4',
				userid: '22',
				time: 1714313757000,
				reply: '샘플 댓글2',
				rereply: [
					{
						userlogo: '/sample/44444.png',
						username: '샘플유저이름4',
						userid: '22',
						time: 1714313757000,
						reply: '샘플 대댓글1',
					},
					{
						userlogo: '/sample/55555.png',
						username: '샘플유저이름5',
						userid: '22',
						time: 1714313757000,
						reply: '샘플 대댓글2',
					},
					{
						userlogo: '/sample/66666.png',
						username: '샘플유저이름6',
						userid: '22',
						time: 1714400157000,
						reply: '샘플 대댓글3',
					},
				],
			},
			{
				userlogo: '/sample/77777.png',
				username: '샘플유저이름7',
				userid: '22',
				time: 1714400157000,
				reply: '샘플 댓글3',
				rereply: [],
			},
		]);
	}, []);

	return (
		<div className={styles.section}>
			<div className={styles.navSection}>
				<p className={styles.label}>댓글 {sample.length}개</p>
				<div className={styles.resetBtnGroup}>
					<button className={styles.sortBtn} onClick={(e) => {}}>
						새로고침
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
							if (newComment != '') {
								setsample([
									...sample,
									{
										userlogo: '/sample/11111.png',
										username: '샘플스트리머이름',
										userid: 'sample',
										time: Date.now(),
										reply: newComment,
										rereply: [],
									},
								]);
								setnewComment('');
							}
						}}
					>
						입력
					</button>
				</div>
			</div>
			<div className={styles.commentsSection}>
				{sample.map((comment, index) => (
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
									<ReplyInput boardid={idx} authorid={myid} parentreplyid={comment.replyid} />
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
											<ReplyInput boardid={idx} authorid={myid} parentreplyid={comment.replyid} />
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
