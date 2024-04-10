'use client';
import Image from 'next/image';
import styles from './liveSuggestion.module.css';
import LargeCards from '@/util/largeCards';
import useSWR from 'swr';
import { useEffect, useRef, useState } from 'react';

export default function LiveSuggestion() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/live`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (isLoading) {
		return (
			<>
				<section className={styles.preview}>
					<div className={styles.overview}></div>
					<div className={styles.previewLive}></div>
				</section>
				<section>
					<p>로딩중입니다...</p>
				</section>
			</>
		);
	}
	if (error) {
		return (
			<>
				<section className={styles.preview}>
					<div className={styles.overview}></div>
					<div className={styles.previewLive}></div>
				</section>
				<section>
					<p>로딩중 에러발생</p>
				</section>
			</>
		);
	}
	/**
	 * @type {{sample_channel:[{username,thumbnailurl, channelid,streamname,streamurl,viewerCount,userlogo}],main_live:[{username,thumbnailurl,channelid,streamname,streamurl,viewerCount,userlogo}],recommend_channel:[{username,thumbnailurl,channelid,streamname,streamurl,viewerCount,userlogo}]}}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<Preview data={data_.sample_channel} />
			<section>
				<LargeCards list={data_.main_live} />
			</section>
		</>
	);
}
/**
 *
 * @param {object} param0
 * @param {[{username,thumbnailurl, channelid,streamname,streamurl,viewerCount,userlogo}]} param0.data
 * @returns
 */
function Preview({ data }) {
	const [cur, setcur] = useState(0);
	if (data.length == 0) {
		return (
			<section className={styles.preview}>
				<div className={styles.overview} style={{}}></div>
				<div className={styles.previewLive} style={{ fontSize: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					현재 방송 중인 사람이 없습니다
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
				player.current.load(data[0].streamurl);
				player.current.setAutoplay(true);
				player.current.setVolume(0);
			}
		};

		document.body.appendChild(script);
	}, []);

	return (
		<section className={styles.preview}>
			<div className={styles.overview}>
				<div className={styles.streamthumbs}>
					{data.map((stream, index) => (
						<button key={index} className={styles.streamthumb}>
							<Image
								src={stream.thumbnailurl}
								fill
								alt='메인페이지 프리뷰 버튼'
								onClick={(e) => {
									if (index != cur) {
										player.current.load(data[index].streamurl);
										player.current.setAutoplay(true);
										player.current.setVolume(0);
										setcur(index);
									}
								}}
							/>
						</button>
					))}
				</div>
			</div>
			<div className={styles.previewLive}>
				<video id='streamingvideo' className={styles.player}></video>
			</div>
		</section>
	);
}
