'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import styles from './livepreview.module.css';
import Link from 'next/link';

export default function Preview({ userid }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', next: { revalidate: 0 }, method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/user/${userid}`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
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
				player.current.load(data_.streamurl);
				player.current.setAutoplay(true);
				player.current.setVolume(0);
			}
		};
		document.body.appendChild(script);
		return () => {
			Player.current = null;
			player.current = null;
		};
	}, []);
	if (isLoading) {
		return (
			<section className={styles.preview}>
				<div className={styles.overview} style={{}}></div>
				<div className={styles.previewLive} style={{ fontSize: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					로딩중...
				</div>
			</section>
		);
	}
	if (error) {
		return (
			<section className={styles.preview}>
				<div className={styles.overview} style={{}}></div>
				<div className={styles.previewLive} style={{ fontSize: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					에러가 발생했습니다
				</div>
			</section>
		);
	}
	const data_ = data.data;
	console.log(data_);
	if (data_.isstream == 0) {
		return (
			<section className={styles.preview}>
				<div className={styles.overview} style={{}}></div>
				<div className={styles.previewLive} style={{ fontSize: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					현재 방송중이 아닙니다.
				</div>
			</section>
		);
	}
	return (
		<>
			<PreviewSection data_={data_} />
			{/* <section className={styles.preview}>
				<div className={styles.overview}>
					<div className={styles.streaminfo1}>
						<div className={styles.viewer}>
							<span className={styles.live}>LIVE</span>
							<span className={styles.viewercount}>{data_.viewerCount}명시청</span>
						</div>
						<p className={styles.streamname}>{data_.streamname}</p>
					</div>
					<div className={styles.streaminfo2}>
						<Image className={styles.streamerLogo} src={data_.userlogo} alt='스트리머로고' width={50} height={50} />
						<div className={styles.stream}>
							<p className={styles.streamerName}>{data_.username}</p>
							<p className={styles.streamCategory}>카테고리</p>
						</div>
					</div>
				</div>
				<div className={styles.previewLive}>
					<video id='streamingvideo' className={styles.player}></video>
				</div>
			</section> */}
		</>
	);
}

/**
 *
 * @param {object} param0
 * @param {{username,thumbnailurl, channelid,streamname,streamurl,viewerCount,userlogo}} param0.data_
 * @returns
 */
function PreviewSection({ data_ }) {
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
				player.current.load(data_.streamurl);
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
						<span className={styles.viewercount}>{data_.viewerCount}명시청</span>
					</div>
					<Link href={`/live/${data_.channelid}`} className={styles.link}>
						<p className={styles.streamname}>{data_.streamname}</p>
					</Link>
				</div>
				<div className={styles.streaminfo2}>
					<Image className={styles.streamerLogo} src={data_.userlogo} alt='스트리머로고' width={50} height={50} />
					<div className={styles.stream}>
						<p className={styles.streamerName}>{data_.username}</p>
						<p className={styles.streamCategory}>{data_.category}</p>
					</div>
				</div>
			</div>
			<div className={styles.previewLive}>
				<video id='streamingvideo' className={styles.player}></video>
			</div>
		</section>
	);
}
