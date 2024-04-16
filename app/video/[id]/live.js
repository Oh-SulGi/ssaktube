'use client';
import styles from './live.module.css';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

export default function Live({ id }) {
	// const fetcher = (...args) => fetch(...args, { cache: 'no-store', next: { revalidate: 0 } }).then((res) => res.json());
	// const { data, error, isLoading } = useSWR(`/api/live/${id}`, fetcher, {
	// 	revalidateIfStale: false,
	// 	revalidateOnFocus: false,
	// 	revalidateOnReconnect: false,
	// 	revalidateOnMount: true,
	// });

	// if (error) {
	// 	return (
	// 		<>
	// 			<div className={styles.wrapper}>
	// 				<div className={styles.playerWrapper}>
	// 					<div className={styles.overlay}>
	// 						<div className={styles.loading}>
	// 							<p>오류 발생</p>
	// 						</div>
	// 					</div>
	// 					<video id='streamingvideo' className={styles.player}></video>
	// 				</div>
	// 			</div>
	// 			<div className={styles.streamwrapper}>
	// 				<h2 className={styles.streamname}>에러 발생</h2>
	// 			</div>
	// 		</>
	// 	);
	// }
	// if (isLoading) {
	// 	return (
	// 		<>
	// 			<div className={styles.wrapper}>
	// 				<div className={styles.playerWrapper}>
	// 					<div className={styles.overlay}>
	// 						<div className={styles.loading}>
	// 							<p>로딩중</p>
	// 						</div>
	// 					</div>
	// 					<video id='streamingvideo' className={styles.player}></video>
	// 				</div>
	// 			</div>
	// 			<div className={styles.streamwrapper}>
	// 				<h2 className={styles.streamname}>로딩중 입니다</h2>
	// 				<div className={styles.streamerwrapper}>
	// 					<Image className={styles.streamerLogo} src={''} height={0} width={60} alt='스트리머로고' />
	// 					<div className={styles.streamer}>
	// 						<div className={styles.streamerName}>
	// 							<span>로딩중 입니다.</span>
	// 						</div>
	// 						<p className={styles.streamCategory}>카테고리</p>
	// 						<div className={styles.streamInfoWrapper}>
	// 							<span>로딩중 입니다</span>
	// 						</div>
	// 					</div>
	// 					<div className={styles.btns}>
	// 						<button className={styles.followBtn}>팔로우</button>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</>
	// 	);
	// }

	const sampleurl = 'https://sesac4-vod.s3.ap-northeast-1.amazonaws.com/output/EP04.m3u8';
	// const sampleurl = 'https://sesac4-vod.s3.ap-northeast-1.amazonaws.com/output/EP04/720p/720p.m3u8';
	// const data_ = data.data;
	const data_ = {
		streamurl: sampleurl,
	};
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
 * @param {{userlogo, username, streamname, streamurl, viewerCount, category,isstream,streamstarttime}} param0.data
 * @returns
 */
function Content({ data }) {
	const videoRef = useRef(null);
	useEffect(() => {
		const video = videoRef.current;

		if (!Hls.isSupported()) {
			const defaultOptions = {};
			video.src = data.streamurl;
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
			hls.loadSource(data.streamurl);
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
	}, []);
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.playerWrapper}>
					<video ref={videoRef} className={styles.player}></video>
				</div>
			</div>
			<div className={styles.streamwrapper}>
				<h2 className={styles.streamname}>방송제목</h2>
				<div className={styles.streamerwrapper}>
					<Image className={styles.streamerLogo} src={data.userlogo} height={60} width={60} alt='스트리머로고' />
					<div className={styles.streamer}>
						<Link className={styles.link} href={`/user/${data.userid}`}>
							<div className={styles.streamerName}>
								<span>사용자이름</span>
							</div>
						</Link>
						<p className={styles.streamCategory}>카테고리</p>
						<div className={styles.streamInfoWrapper}>
							<p>시청자수</p>
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
