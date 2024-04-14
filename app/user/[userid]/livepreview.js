'use client';

import Image from 'next/image';
import { useState } from 'react';
import useSWR from 'swr';
import styles from './livepreview.module.css';

export default function Preview({ userid }) {
	// const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	// const { data, error, isLoading } = useSWR(`/api/live`, fetcher, {
	// 	revalidateIfStale: false,
	// 	revalidateOnFocus: false,
	// 	revalidateOnReconnect: false,
	// 	revalidateOnMount: true,
	// });
	// if (isLoading) {
	// 	return <></>;
	// }
	// if (error) {
	// 	return <></>;
	// }
	const data = { isstream: 0 };
	if (data.isstream == 0) {
		return (
			<section className={styles.preview}>
				<div className={styles.overview} style={{}}></div>
				<div className={styles.previewLive} style={{ fontSize: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					현재 방송중이 아닙니다.
				</div>
			</section>
		);
	}
	const script = document.createElement('script');
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const Player = useRef(null);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const player = useRef(null);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		script.src = 'https://player.live-video.net/1.22.0/amazon-ivs-player.min.js';
		script.onload = () => {
			console.log('player onload');
			Player.current = window.IVSPlayer;
			if (Player.current.isPlayerSupported) {
				player.current = Player.current.create();
				player.current.attachHTMLVideoElement(document.getElementById('streamingvideo'));
				player.current.load(data.streamurl);
				player.current.setAutoplay(true);
				player.current.setVolume(0);
			}
		};

		document.body.appendChild(script);
	}, []);

	return (
		<section className={styles.preview}>
			<div className={styles.overview}>
				<div className={styles.streaminfo1}>
					<div className={styles.viewer}>
						<span className={styles.live}>LIVE</span>
						<span className={styles.viewercount}>{data.viewerCount}명시청</span>
					</div>
					<p className={styles.streamname}>{data.streamname}</p>
				</div>
				<div className={styles.streaminfo2}>
					<Image className={styles.streamerLogo} src={data.userlogo} alt='스트리머로고' width={50} height={50} />
					<div className={styles.stream}>
						<p className={styles.streamerName}>{data.username}</p>
						<p className={styles.streamCategory}>카테고리</p>
					</div>
				</div>
			</div>
			<div className={styles.previewLive}>
				<video id='streamingvideo' className={styles.player}></video>
			</div>
		</section>
	);
}
