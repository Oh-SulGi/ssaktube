'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './livepreview.module.css';
import Link from 'next/link';

export default function Preview({ userid }) {
	const script = document.createElement('script');
	const Player = useRef(null);
	const player = useRef(null);
	useEffect(() => {
		script.src = 'https://player.live-video.net/1.22.0/amazon-ivs-player.min.js';
		script.onload = () => {
			console.log('player onload');
			Player.current = window.IVSPlayer;
			if (Player.current.isPlayerSupported) {
				player.current = Player.current.create();
				player.current.attachHTMLVideoElement(document.getElementById('streamingvideo'));
				player.current.load('https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8');
				player.current.setAutoplay(true);
				player.current.setVolume(0);
			}
		};

		document.body.appendChild(script);
		return () => {
			player.current = null;
			Player.current = null;
			document.body.removeChild(script);
		};
	}, []);

	return (
		<section className={styles.preview}>
			<div className={styles.overview}>
				<div className={styles.streaminfo1}>
					<div className={styles.viewer}>
						<span className={styles.live}>LIVE</span>
						<span className={styles.viewercount}>XX명시청</span>
					</div>
					<Link href={`/live/sample`} className={styles.link}>
						<p className={styles.streamname}>샘플 스트리밍 제목</p>
					</Link>
				</div>
				<div className={styles.streaminfo2}>
					<Image className={styles.streamerLogo} src={'/sample/11111.png'} alt='스트리머로고' width={50} height={50} />
					<div className={styles.stream}>
						<p className={styles.streamerName}>샘플스트리머이름</p>
						<p className={styles.streamCategory}>Game</p>
					</div>
				</div>
			</div>
			<div className={styles.previewLive}>
				<video id='streamingvideo' className={styles.player}></video>
			</div>
		</section>
	);
}
