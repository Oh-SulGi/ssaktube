'use client';
import styles from './live.module.css';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import useSWR from 'swr';
import FollowBtn from '@/util/followBtn';
export default function Live({ idx }) {
	const videoRef = useRef(null);
	const date = new Date(Date.now()).toLocaleDateString();
	useEffect(() => {
		const video = videoRef.current;
		let videourl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
		if (!Hls.isSupported()) {
			const defaultOptions = {};
			video.src = videourl;

			video.controls = true;
			const player = new Plyr(video, defaultOptions);
		} else {
			/**
			 * @type {Plyr.Options}
			 */
			const defaultOptions = {
				controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
				settings: ['quality', 'speed'],
				debug: false,
			};
			const hls = new Hls({ smoothQualityChange: true });

			hls.loadSource(videourl);
			hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
				const availableQualities = hls.levels.map((l) => l.height);
				availableQualities.unshift(0);
				// console.log(availableQualities);
				defaultOptions.quality = {
					default: 0,
					options: availableQualities,
					forced: true,
					onChange: (e) => {
						updateQuality(e);
					},
				};
				defaultOptions.i18n = {
					qualityLabel: {
						0: 'Auto',
					},
				};

				// console.log(defaultOptions);
				const player = new Plyr(video, defaultOptions);
			});
			hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
				var span = document.querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span");
				if (hls.autoLevelEnabled) {
					span.innerHTML = `AUTO (${hls.levels[data.level].height}p)`;
				} else {
					span.innerHTML = `AUTO`;
				}
			});
			hls.attachMedia(video);
			window.hls = hls;
		}
		function updateQuality(newQuality) {
			if (newQuality === 0) {
				console.log('다음 ts파일부터', newQuality, '해상도로 재생됩니다.');
				window.hls.nextLevel = -1; //Enable AUTO quality if option.value = 0
			} else {
				window.hls.levels.forEach((level, levelIndex) => {
					// console.log(level);
					// console.log(levelIndex);
					if (level.height === newQuality) {
						console.log('다음 ts파일부터', newQuality, '해상도로 재생됩니다.');
						window.hls.nextLevel = levelIndex;
					}
				});
			}
			// console.log(newQuality);
		}
		return () => {
			videoRef.current = null;
		};
	}, []);
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.playerWrapper}>
					<video ref={videoRef} className={styles.player}></video>
				</div>
			</div>
			<div className={styles.streamwrapper}>
				<h2 className={styles.streamname}>샘플영상제목</h2>
				<div className={styles.streamerwrapper}>
					<Image className={styles.streamerLogo} src={'/sample/11111.png'} height={60} width={60} alt='스트리머로고' />
					<div className={styles.streamer}>
						<Link className={styles.link} href={`/user/sample`}>
							<div className={styles.streamerName}>
								<span>샘플스트리머이름</span>
							</div>
						</Link>
						<p className={styles.streamCategory}>카테고리</p>
						<div className={styles.streamInfoWrapper}>
							<p>조회수 XX회</p>
							<p>{date}</p>
						</div>
					</div>
					<FollowBtn target_userid={''} />
				</div>
			</div>
		</>
	);
}
