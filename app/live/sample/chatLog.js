'use client';
import Image from 'next/image';
import styles from './chat.module.css';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/util/redux/hooks';
import { addchat, rstchat } from '@/util/redux/reducers/chat';

export default function ChatLog({ id, login }) {
	const dispatch = useAppDispatch();
	const { userid } = useAppSelector((state) => state.login);
	const { chatlog, isChatOpen } = useAppSelector((state) => state.chat);
	const [chat, setchat] = useState('');
	useEffect(() => {
		if (userid != 'sample') {
			document.querySelector(`.${styles.chatinput} input`).setAttribute('disabled', true);
			document.querySelector(`.${styles.chatsubmit} button`).setAttribute('disabled', true);
			setchat('로그인해주세요');
		}
		return () => {
			dispatch(rstchat());
		};
	}, [userid]);

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
							if (chat != '') {
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
					>
						전송
					</button>
				</div>
			</div>
		</>
	);
}
