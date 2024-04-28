'use client';
import Image from 'next/image';
import styles from './chat.module.css';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/util/redux/hooks';
import { addchat, rstchat } from '@/util/redux/reducers/chat';

export default function ChatLog({ id, login }) {
	const [userid, setuserid] = useState('');
	const [username, setusername] = useState('');
	const [isReady, setisReady] = useState(false);
	const dispatch = useAppDispatch();
	const { chatlog, isChatOpen } = useAppSelector((state) => state.chat);
	const [chat, setchat] = useState('');
	const chatEndpoint = 'wss://edge.ivschat.ap-northeast-1.amazonaws.com';
	const ws = useRef(null);
	useEffect(() => {}, []);

	return (
		<>
			<div id='chatlog' className={styles.chatlog}>
				{chatlog.map((item, index) => (
					<div className={styles.chatwrap} key={index}>
						<Image className={styles.chaticon} src={item.Attributes.userlogo} alt='사용자프로필' width={20} height={20} />
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
								dispatch(
									addchat({
										Attributes: {
											userlogo: `/aws.png`,
										},
										Content: chat,
									})
								);
								setchat('');
							}
						}}
					></input>
				</div>
				<div className={styles.chatsubmit}>
					<button
						onClick={(e) => {
							dispatch(
								addchat({
									Attributes: {
										userlogo: `/aws.png`,
									},
									Content: chat,
								})
							);
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
