'use client';
import styles from './live.module.css';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/util/redux/hooks';
import { toggleIsChatOpen } from '@/util/redux/reducers/chat';
import cstyles from './chat.module.css';
import Link from 'next/link';
import FollowBtn from '@/util/followBtn';

export default function Live({ id }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', next: { revalidate: 0 } }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/live/${id}`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});

	if (error) {
		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.playerWrapper}>
						<div className={styles.overlay}>
							<div className={styles.loading}>
								<p>오류 발생</p>
							</div>
						</div>
						<video id='streamingvideo' className={styles.player}></video>
					</div>
				</div>
				<div className={styles.streamwrapper}>
					<h2 className={styles.streamname}>에러 발생</h2>
				</div>
			</>
		);
	}
	if (isLoading) {
		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.playerWrapper}>
						<div className={styles.overlay}>
							<div className={styles.loading}>
								<p>로딩중</p>
							</div>
						</div>
						<video id='streamingvideo' className={styles.player}></video>
					</div>
				</div>
				<div className={styles.streamwrapper}>
					<h2 className={styles.streamname}>로딩중 입니다</h2>
					<div className={styles.streamerwrapper}>
						<Image className={styles.streamerLogo} src={''} height={0} width={60} alt='스트리머로고' />
						<div className={styles.streamer}>
							<div className={styles.streamerName}>
								<span>로딩중 입니다.</span>
							</div>
							<p className={styles.streamCategory}>카테고리</p>
							<div className={styles.streamInfoWrapper}>
								<span>로딩중 입니다</span>
							</div>
						</div>
						<div className={styles.btns}>
							<button className={styles.followBtn}>팔로우</button>
						</div>
					</div>
				</div>
			</>
		);
	}
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<Content data={data_} />
		</>
	);
}

/**
 *
 * @param {object} param0
 * @param {{userlogo, username,userid, streamname, streamurl, viewerCount, category,isstream,streamstarttime}} param0.data
 * @returns
 */
function Content({ data }) {
	const Player = useRef(null);
	const player = useRef(null);
	const timer = useRef(null);
	const [time, settime] = useState(Math.floor((new Date().getTime() - new Date(data.streamstarttime).getTime()) / 1000));
	const [play, setplay] = useState(true);
	const [mute, setmute] = useState(true);
	const [full, setfull] = useState(false);
	const [setting, setsetting] = useState(false);
	const [quality, setquality] = useState([]);
	const script = document.createElement('script');
	const dispatch = useAppDispatch();
	const { isChatOpen } = useAppSelector((state) => state.chat);
	useEffect(() => {
		if (data.isstream == 1) {
			script.src = 'https://player.live-video.net/1.22.0/amazon-ivs-player.min.js';
			script.onload = () => {
				Player.current = window.IVSPlayer;
				if (Player.current.isPlayerSupported) {
					player.current = Player.current.create();
					player.current.attachHTMLVideoElement(document.getElementById('streamingvideo'));
					player.current.load(data.streamurl);
					player.current.setAutoplay(true);
					player.current.setVolume(0.1);
					player.current.setMuted(true);
				}
			};

			document.body.appendChild(script);
		}
		if (data.isstream == 0) {
			document.querySelectorAll(`.${styles.playerControlsInner} button`).forEach((element) => {
				element.setAttribute('disabled', true);
			});
		}
	}, []);
	useEffect(() => {
		timer.current = setInterval(() => {
			settime((time) => time + 1);
		}, 1000);
		return () => {
			console.log('clearInterval');
			clearInterval(timer.current);
		};
	}, []);

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.overlay}>
					{data.isstream == 1 ? (
						<div className={styles.playerControls}>
							<div className={styles.playerControlsInner}>
								<button
									className={`${styles.play} ${styles.btn}`}
									onClick={(e) => {
										if (play) {
											player.current.pause();
										}
										if (!play) {
											player.current.play();
										}
										setplay(!play);
									}}
								>
									{!play ? (
										<svg xmlns='http://www.w3.org/2000/svg' height='30' viewBox='0 0 24 24' width='30'>
											<path d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z' />
										</svg>
									) : (
										<svg xmlns='http://www.w3.org/2000/svg' height='30' viewBox='0 0 24 24' width='30'>
											<path d='M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z' />
										</svg>
									)}
								</button>
								<button
									className={`${styles.mute} ${styles.btn}`}
									onClick={(e) => {
										console.log(player.current.isMuted());
										setmute(!mute);
										player.current.setMuted(!mute);
									}}
								>
									{!mute ? (
										<svg xmlns='http://www.w3.org/2000/svg' height='30' viewBox='0 0 24 24' width='30'>
											<path d='M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z' />
										</svg>
									) : (
										<svg xmlns='http://www.w3.org/2000/svg' height='30' viewBox='0 0 24 24' width='30'>
											<path d='M3.63 3.63c-.39.39-.39 1.02 0 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z' />
										</svg>
									)}
								</button>
								<button
									className={`${styles.settings} ${styles.btn}`}
									onClick={(e) => {
										let qualities = player.current.getQualities();
										let currentQuality = player.current.getQuality();
										setsetting(!setting);
										setquality(qualities);
									}}
								>
									<svg height='30' viewBox='0 0 24 24' width='30' xmlns='http://www.w3.org/2000/svg'>
										<path d='m0 0h24v24h-24z' fill='none' />
										<path d='m19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65c-.03-.24-.24-.42-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z' />
									</svg>
								</button>
								<button
									className={`${styles.fullscreen} ${styles.btn}`}
									title='Toggle fullscreen'
									onClick={(e) => {
										document.getElementById('streamingvideo').requestFullscreen();
									}}
								>
									{!full ? (
										<svg height='25' viewBox='0 0 24 24' width='25' xmlns='http://www.w3.org/2000/svg'>
											<path d='M5.85 19.45Q5.3 19.45 4.925 19.075Q4.55 18.7 4.55 18.15V15.275Q4.55 14.725 4.938 14.337Q5.325 13.95 5.875 13.95Q6.425 13.95 6.812 14.337Q7.2 14.725 7.2 15.275V16.8H8.725Q9.275 16.8 9.663 17.188Q10.05 17.575 10.05 18.125Q10.05 18.675 9.663 19.062Q9.275 19.45 8.725 19.45ZM5.875 10.05Q5.325 10.05 4.938 9.662Q4.55 9.275 4.55 8.725V5.85Q4.55 5.3 4.925 4.925Q5.3 4.55 5.85 4.55H8.725Q9.275 4.55 9.663 4.937Q10.05 5.325 10.05 5.875Q10.05 6.425 9.663 6.812Q9.275 7.2 8.725 7.2H7.2V8.725Q7.2 9.275 6.812 9.662Q6.425 10.05 5.875 10.05ZM15.275 19.45Q14.725 19.45 14.338 19.062Q13.95 18.675 13.95 18.125Q13.95 17.575 14.338 17.188Q14.725 16.8 15.275 16.8H16.8V15.275Q16.8 14.725 17.188 14.337Q17.575 13.95 18.125 13.95Q18.675 13.95 19.062 14.337Q19.45 14.725 19.45 15.275V18.15Q19.45 18.7 19.075 19.075Q18.7 19.45 18.15 19.45ZM18.125 10.05Q17.575 10.05 17.188 9.662Q16.8 9.275 16.8 8.725V7.2H15.275Q14.725 7.2 14.338 6.812Q13.95 6.425 13.95 5.875Q13.95 5.325 14.338 4.937Q14.725 4.55 15.275 4.55H18.15Q18.7 4.55 19.075 4.925Q19.45 5.3 19.45 5.85V8.725Q19.45 9.275 19.062 9.662Q18.675 10.05 18.125 10.05Z' />
										</svg>
									) : (
										<svg height='25' viewBox='0 0 24 24' width='25' xmlns='http://www.w3.org/2000/svg'>
											<path d='M9 19.525Q8.45 19.525 8.062 19.15Q7.675 18.775 7.675 18.2V16.325H5.8Q5.225 16.325 4.85 15.938Q4.475 15.55 4.475 15Q4.475 14.45 4.85 14.062Q5.225 13.675 5.8 13.675H9Q9.55 13.675 9.938 14.062Q10.325 14.45 10.325 15V18.2Q10.325 18.775 9.938 19.15Q9.55 19.525 9 19.525ZM5.8 10.325Q5.225 10.325 4.85 9.938Q4.475 9.55 4.475 9Q4.475 8.45 4.85 8.062Q5.225 7.675 5.8 7.675H7.675V5.8Q7.675 5.225 8.062 4.85Q8.45 4.475 9 4.475Q9.55 4.475 9.938 4.85Q10.325 5.225 10.325 5.8V9Q10.325 9.55 9.938 9.938Q9.55 10.325 9 10.325ZM15 19.525Q14.45 19.525 14.062 19.15Q13.675 18.775 13.675 18.2V15Q13.675 14.45 14.062 14.062Q14.45 13.675 15 13.675H18.2Q18.775 13.675 19.15 14.062Q19.525 14.45 19.525 15Q19.525 15.55 19.15 15.938Q18.775 16.325 18.2 16.325H16.325V18.2Q16.325 18.775 15.938 19.15Q15.55 19.525 15 19.525ZM15 10.325Q14.45 10.325 14.062 9.938Q13.675 9.55 13.675 9V5.8Q13.675 5.225 14.062 4.85Q14.45 4.475 15 4.475Q15.55 4.475 15.938 4.85Q16.325 5.225 16.325 5.8V7.675H18.2Q18.775 7.675 19.15 8.062Q19.525 8.45 19.525 9Q19.525 9.55 19.15 9.938Q18.775 10.325 18.2 10.325Z' />
										</svg>
									)}
								</button>
								{setting ? (
									<div className={styles.settingsMenu}>
										{quality.map((item) => (
											<p
												key={item.name}
												className={styles.settingsItem}
												onClick={(e) => {
													player.current.setQuality(item);
												}}
											>
												{item.name}
											</p>
										))}
									</div>
								) : (
									''
								)}
							</div>
							{isChatOpen ? (
								''
							) : (
								<button
									className={`${styles.chat} ${styles.btn}`}
									onClick={(e) => {
										dispatch(toggleIsChatOpen());
										console.log('chat open');
										document.getElementById('chatsection').classList.toggle(cstyles.close);
									}}
								>
									<svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
										<rect width='36' height='36' rx='10' fill='#19191C' fillOpacity='0.5'></rect>
										<g filter='url(#filter0_d_11440_95002)'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M29.4949 16.7542C29.3448 12.4148 25.8263 9 21.6089 9L14.492 9.0002C10.312 9.00021 6.70649 12.3209 6.50881 16.6617C6.29957 21.2601 9.84387 25.0642 14.2974 25.0642H19.3504V26.4843C19.3504 27.8156 20.8737 28.4717 21.8344 27.6133C23.1556 26.4331 25.8355 24.0335 26.9124 23.035C28.5683 21.4991 29.5813 19.2437 29.4949 16.7542ZM12.04 17.1429C12.04 16.231 12.785 15.5 13.6939 15.5C14.6028 15.5 15.3477 16.231 15.3477 17.1429C15.3477 18.0547 14.6028 18.7857 13.6939 18.7857C12.785 18.7857 12.04 18.0547 12.04 17.1429ZM16.3477 17.1429C16.3477 16.231 17.0926 15.5 18.0015 15.5C18.9104 15.5 19.6553 16.231 19.6553 17.1429C19.6553 18.0547 18.9104 18.7857 18.0015 18.7857C17.0926 18.7857 16.3477 18.0547 16.3477 17.1429ZM20.6553 17.1429C20.6553 16.231 21.4002 15.5 22.3091 15.5C23.218 15.5 23.963 16.231 23.963 17.1429C23.963 18.0547 23.218 18.7857 22.3091 18.7857C21.4002 18.7857 20.6553 18.0547 20.6553 17.1429Z'
												fill='white'
											></path>
										</g>
									</svg>
								</button>
							)}
						</div>
					) : (
						<div className={styles.loading}>
							<p>현재 방송중이 아닙니다</p>
						</div>
					)}
				</div>
				<div className={styles.playerWrapper}>
					<video id='streamingvideo' className={styles.player} controls={false}></video>
				</div>
			</div>
			<div className={styles.streamwrapper}>
				<h2 className={styles.streamname}>{data.streamname}</h2>
				<div className={styles.streamerwrapper}>
					<Image className={styles.streamerLogo} src={data.userlogo} height={60} width={60} alt='스트리머로고' />
					<div className={styles.streamer}>
						<Link className={styles.link} href={`/user/${data.userid}`}>
							<div className={styles.streamerName}>
								<span>{data.username}</span>
							</div>
						</Link>
						<p className={styles.streamCategory}>{data.category}</p>
						<div className={styles.streamInfoWrapper}>
							<p>{data.viewerCount}명 시청 중</p>
							<TimePassed time={time} />
						</div>
					</div>
					<FollowBtn target_userid={data.userid} />
				</div>
			</div>
		</>
	);
}

function TimePassed({ time }) {
	let diff = time;
	const diffh = Math.floor(diff / 3600);
	diff = diff % 3600;
	const diffm = Math.floor(diff / 60);
	const diffs = diff % 60;

	return (
		<p>
			{diffh}:{diffm}:{diffs} 스트리밍 중
		</p>
	);
}
