'use client';
import Image from 'next/image';
import styles from './chat.module.css';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/util/redux/hooks';
import { addchat, rstchat } from '@/util/redux/reducers/chat';

export default function ChatLog({ id, user_logo, userid }) {
	const [isReady, setisReady] = useState(false);
	const [token, settoken] = useState('');
	const dispatch = useAppDispatch();
	const { chatlog, isChatOpen } = useAppSelector((state) => state.chat);
	const [chat, setchat] = useState('');
	const chatEndpoint = 'wss://edge.ivschat.ap-northeast-1.amazonaws.com';
	const ws = useRef(null);
	useEffect(() => {
		if (!isChatOpen) {
			document.getElementById('chatsection').classList.toggle(styles.close);
		}
		fetch(`/api/live/chatroom/${id}`)
			.then((res) => {
				if (res.status != 200) {
					throw new Error();
				}
				return res.json();
			})
			.then((data) => {
				console.log('chatToken :', data.data.chatToken);
				const token = data.data.chatToken;
				setisReady(true);
				ws.current = new WebSocket(chatEndpoint, token);
				ws.current.addEventListener('open', (e) => {
					console.log('ws open');
				});
				ws.current.addEventListener('close', (e) => {
					console.log('ws closed');
				});
				ws.current.addEventListener('message', (e) => {
					const msg = JSON.parse(e.data);

					if (msg.Type === 'MESSAGE') {
						console.log('ws message');
						dispatch(addchat(msg));
						setInterval(() => {
							document.getElementById('chatlog').scrollTo(0, document.getElementById('chatlog').scrollHeight);
						}, 100);
					}
				});
			})
			.catch((error) => {
				console.log(error);
				document.querySelector(`.${styles.chatinput} input`).setAttribute('disabled', true);
				document.querySelector(`.${styles.chatsubmit} button`).setAttribute('disabled', true);
				setisReady(true);
			});

		return () => {
			console.log('return chatlog');
			if (ws.current) {
				ws.current.close();
			}
			dispatch(rstchat());
		};
	}, [token]);

	return (
		<>
			<div id='chatlog' className={styles.chatlog}>
				{/* <div className={styles.chatwrap}>
					<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
					<p className={styles.chatting}>{token}</p>
				</div> */}
				{isReady ? (
					chatlog.map((item) => (
						<div className={styles.chatwrap} key={item.Id}>
							<Image className={styles.chaticon} src={item.Attributes.userlogo} alt='사용자프로필' width={20} height={20} />
							<p className={styles.chatting}>{item.Content}</p>
						</div>
					))
				) : (
					<div className={styles.chatwrap}>
						<p className={styles.chatting}>로딩중입니다...</p>
					</div>
				)}
			</div>
			<div className={styles.chatform}>
				<div className={styles.chatinput}>
					<input
						className={styles.text}
						value={chat}
						onChange={(e) => {
							setchat(e.target.value);
						}}
						onKeyPress={(e) => {
							e.nativeEvent.isComposing === false;
							if (e.key === 'Enter') {
								const payload = JSON.stringify({
									Action: 'SEND_MESSAGE',
									Attributes: {
										user_id: userid,
										username: '이름이요',
										userlogo: user_logo,
									},
									Content: chat,
								});
								ws.current.send(payload);
								console.log('ws send');
								setchat('');
							}
						}}
					></input>
				</div>
				<div className={styles.chatsubmit}>
					<button
						onClick={(e) => {
							const payload = JSON.stringify({
								Action: 'SEND_MESSAGE',
								Attributes: {
									user_id: userid,
									username: '이름이요',
									userlogo: user_logo,
								},
								Content: chat,
							});
							ws.current.send(payload);
							console.log('ws send');
							setchat('');
						}}
					>
						전송
					</button>
				</div>
			</div>
		</>
	);
}
// export default function ChatLog({ id }) {
// 	const fetcher = (...args) => fetch(...args, { cache: 'no-store', next: { revalidate: 0 } }).then((res) => res.json());
// 	const { data, error, isLoading } = useSWR(`/api/live/chatroom/${id}`, fetcher, { revalidateOnReconnect: false, revalidateOnFocus: false });
// 	if (error) {
// 		return (
// 			<>
// 				<div className={styles.chatlog}>
// 					<div className={styles.chatwrap}>
// 						<p className={styles.chatting}>에러발생</p>
// 					</div>
// 				</div>
// 				<div className={styles.chatform}>
// 					<div className={styles.chatinput}>
// 						<input className={styles.text}></input>
// 					</div>
// 					<div className={styles.chatsubmit}>
// 						<button>전송</button>
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// 	if (isLoading) {
// 		return (
// 			<>
// 				<div className={styles.chatlog}>
// 					<div className={styles.chatwrap}>
// 						<p className={styles.chatting}>로딩 중</p>
// 					</div>
// 				</div>
// 				<div className={styles.chatform}>
// 					<div className={styles.chatinput}>
// 						<input className={styles.text}></input>
// 					</div>
// 					<div className={styles.chatsubmit}>
// 						<button>전송</button>
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// 	const data_ = data.data;

// 	return (
// 		<>
// 			<Content token={data_.chatToken} />
// 		</>
// 	);
// }

function Content() {
	fetch(`/api/live/chatroom/${id}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
	const dispatch = useAppDispatch();
	const { chatlog } = useAppSelector((state) => state.chat);
	const [chat, setchat] = useState('');
	const chatEndpoint = 'wss://edge.ivschat.ap-northeast-1.amazonaws.com';
	const ws = useRef(null);
	useEffect(() => {
		ws.current = new WebSocket(chatEndpoint, token);
		ws.current.addEventListener('open', (e) => {
			console.log('ws open');
		});
		ws.current.addEventListener('close', (e) => {
			console.log('ws closed');
		});
		ws.current.addEventListener('message', (e) => {
			const msg = JSON.parse(e.data);

			if (msg.Type === 'MESSAGE') {
				console.log('ws message');
				dispatch(addchat(msg));
			}
		});
		return () => {
			console.log('return chatlog');
			ws.current.close();
			dispatch(rstchat());
		};
	}, []);

	return (
		<>
			<div className={styles.chatlog}>
				{/* <div className={styles.chatwrap}>
					<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
					<p className={styles.chatting}>{token}</p>
				</div> */}
				{chatlog.map((item) => (
					<div className={styles.chatwrap} key={item.Id}>
						<Image className={styles.chaticon} src={'https://' + item.Attributes.userlogo} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>{item.Content}</p>
					</div>
				))}
			</div>
			<div className={styles.chatform}>
				<div className={styles.chatinput}>
					<input
						className={styles.text}
						value={chat}
						onChange={(e) => {
							setchat(e.target.value);
						}}
						onKeyPress={(e) => {
							e.nativeEvent.isComposing === false;
							if (e.key === 'Enter') {
								const payload = JSON.stringify({
									Action: 'SEND_MESSAGE',
									Attributes: {
										user_id: '아이디요',
										username: '이름이요',
										userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/0.jpg',
									},
									Content: chat,
								});
								ws.current.send(payload);
								console.log('ws send');
								setchat('');
							}
						}}
					></input>
				</div>
				<div className={styles.chatsubmit}>
					<button
						onClick={(e) => {
							const payload = JSON.stringify({
								Action: 'SEND_MESSAGE',
								Attributes: {
									user_id: '아이디요',
									username: '이름이요',
									userlogo: 'https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/0.jpg',
								},
								Content: chat,
							});
							ws.current.send(payload);
							console.log('ws send');
							setchat('');
						}}
					>
						전송
					</button>
				</div>
			</div>
		</>
	);
}
