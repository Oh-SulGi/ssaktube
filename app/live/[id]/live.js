'use client';
import Script from 'next/script';
import styles from './live.module.css';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

let Player;
let player;
export default function Live({ id }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/live/${id}`, fetcher);

	if (error) {
		return (
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
		);
	}
	if (isLoading) {
		return (
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
		);
	}
	/**
	 * @type {{userlogo, username, streamname, userid, streamurl, viewercount}}
	 */
	const jdata = data.data;

	return (
		<>
			<Content jdata={jdata} />
		</>
	);
}

function Content({ jdata }) {
	const [play, setplay] = useState(true);
	const [mute, setmute] = useState(true);
	const [full, setfull] = useState(false);
	const [setting, setsetting] = useState(false);
	const [quality, setquality] = useState([]);
	const script = document.createElement('script');

	useEffect(() => {
		console.log(jdata);
		if (!jdata.error) {
			script.src = 'https://player.live-video.net/1.22.0/amazon-ivs-player.min.js';
			script.onload = () => {
				Player = window.IVSPlayer;
				if (Player.isPlayerSupported) {
					player = Player.create();
					player.attachHTMLVideoElement(document.getElementById('streamingvideo'));
					player.load(jdata['LiveData'].streamurl);
					player.setAutoplay(true);
					player.setVolume(0.1);
					player.setMuted(true);
				}
			};

			document.body.appendChild(script);
		} else {
			console.log('방송중아님');
		}
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.overlay}>
				<div className={styles.playerControls}>
					<div className={styles.playerControlsInner}>
						<button
							className={`${styles.play} ${styles.btn}`}
							onClick={(e) => {
								if (play) {
									player.pause();
								}
								if (!play) {
									player.play();
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
								console.log(player.isMuted());
								setmute(!mute);
								player.setMuted(!mute);
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
								let qualities = player.getQualities();
								let currentQuality = player.getQuality();
								setsetting(!setting);
								setquality(qualities);
							}}
						>
							<svg height='30' viewBox='0 0 24 24' width='30' xmlns='http://www.w3.org/2000/svg'>
								<path d='m0 0h24v24h-24z' fill='none' />
								<path d='m19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65c-.03-.24-.24-.42-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z' />
							</svg>
						</button>
						<button className={`${styles.fullscreen} ${styles.btn}`} title='Toggle fullscreen'>
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
											player.setQuality(item);
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
				</div>
				<div id='settings-menu'></div>
			</div>
			<div className={styles.playerWrapper}>
				<video id='streamingvideo' className={styles.player}></video>
			</div>
		</div>
	);
}
