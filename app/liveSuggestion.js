'use client';
import Image from 'next/image';
import styles from './liveSuggestion.module.css';
import useSWR from 'swr';
import { useEffect, useRef, useState } from 'react';
import LargeCard from '@/util/largeCard';

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
	 * @type {{sample_channel:[{username,thumbnailurl, channelid,streamname,streamurl,viewerCount,userlogo,userid}],main_live:[{username,thumbnailurl,channelid,streamname,streamurl,viewerCount,userlogo,userid}]}}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<Preview data={data_.sample_channel} />
			<section className={styles.cardlist}>
				{data_.main_live.map((live) => (
					<LargeCard
						id={live.channelid}
						streamname={live.streamname}
						thumbnailurl={live.thumbnailurl}
						userid={live.userid}
						userlogo={live.userlogo}
						username={live.username}
						viewerCount={live.viewerCount}
						key={live.channelid}
						category={live.category}
					/>
				))}
				<LargeCard
					id={'sample'}
					streamname={'샘플스트리밍1'}
					thumbnailurl={'/sample/11111.png'}
					userid={'sample'}
					userlogo={'/aws.png'}
					username={'샘플스트리머1'}
					viewerCount={'1'}
					category={'Game'}
				/>
				<LargeCard
					id={'sample'}
					streamname={'샘플스트리밍2'}
					thumbnailurl={'/sample/22222.png'}
					userid={'sample'}
					userlogo={'/aws.png'}
					username={'샘플스트리머2'}
					viewerCount={'2'}
					category={'Game'}
				/>
				<LargeCard
					id={'sample'}
					streamname={'샘플스트리밍3'}
					thumbnailurl={'/sample/33333.png'}
					userid={'sample'}
					userlogo={'/aws.png'}
					username={'샘플스트리머3'}
					viewerCount={'3'}
					category={'Just Chatting'}
				/>
				<LargeCard
					id={'sample'}
					streamname={'샘플스트리밍4'}
					thumbnailurl={'/sample/44444.png'}
					userid={'sample'}
					userlogo={'/aws.png'}
					username={'샘플스트리머4'}
					viewerCount={'4'}
					category={'Just Chatting'}
				/>
				<LargeCard
					id={'sample'}
					streamname={'샘플스트리밍5'}
					thumbnailurl={'/sample/55555.png'}
					userid={'sample'}
					userlogo={'/aws.png'}
					username={'샘플스트리머5'}
					viewerCount={'5'}
					category={'Just Chatting'}
				/>
				<LargeCard
					id={'sample'}
					streamname={'샘플스트리밍6'}
					thumbnailurl={'/sample/66666.png'}
					userid={'sample'}
					userlogo={'/aws.png'}
					username={'샘플스트리머6'}
					viewerCount={'6'}
					category={'Just Chatting'}
				/>
				<LargeCard
					id={'sample'}
					streamname={'샘플스트리밍7'}
					thumbnailurl={'/sample/77777.png'}
					userid={'sample'}
					userlogo={'/aws.png'}
					username={'샘플스트리머7'}
					viewerCount={'7'}
					category={'Just Chatting'}
				/>
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
		return () => {
			Player.current = null;
			player.current = null;
		};
	}, []);

	return (
		<section className={styles.preview}>
			<div className={styles.overview}>
				<div className={styles.streaminfo1}>
					<div className={styles.viewer}>
						<span className={styles.live}>LIVE</span>
						<span className={styles.viewercount}>{data[cur].viewerCount}명시청</span>
					</div>
					<p className={styles.streamname}>{data[cur].streamname}</p>
				</div>
				<div className={styles.streaminfo2}>
					<Image className={styles.streamerLogo} src={data[cur].userlogo} alt='스트리머로고' width={50} height={50} />
					<div className={styles.stream}>
						<p className={styles.streamerName}>{data[cur].username}</p>
						<p className={styles.streamCategory}>{data[cur].category}</p>
					</div>
				</div>

				<div className={styles.streamthumbs}>
					{data.map((stream, index) => (
						<button key={index} className={styles.streamthumb} focus={index == cur ? true : false}>
							<Image
								src={stream.thumbnailurl}
								fill
								alt='메인페이지 프리뷰 버튼'
								onClick={(e) => {
									setcur(index);
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
