'use client';

import useSWR from 'swr';
import styles from './chat.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ChatLog({ id }) {
	const data_ = [
		{
			username: '샘플스트리머1',
			thumbnailurl: '/sample/11111.png',
			channelid: 'sample',
			streamname: '샘플영상1',
			viewercount: 1,
			userlogo: '/sample/11111.png',
			userid: 'sample',
			category: 'Game',
		},
		{
			username: '샘플스트리머2',
			thumbnailurl: '/sample/22222.png',
			channelid: 'sample',
			streamname: '샘플영상2',
			viewercount: 2,
			userlogo: '/sample/22222.png',
			userid: 'sample',
			category: 'Just Chatting',
		},
		{
			username: '샘플스트리머3',
			thumbnailurl: '/sample/33333.png',
			channelid: 'sample',
			streamname: '샘플영상3',
			viewercount: 3,
			userlogo: '/sample/33333.png',
			userid: 'sample',
			category: 'Game',
		},
		{
			username: '샘플스트리머4',
			thumbnailurl: '/sample/44444.png',
			channelid: 'sample',
			streamname: '샘플영상4',
			viewercount: 5,
			userlogo: '/sample/44444.png',
			userid: 'sample',
			category: 'Just Chatting',
		},
		{
			username: '샘플스트리머5',
			thumbnailurl: '/sample/55555.png',
			channelid: 'sample',
			streamname: '샘플영상5',
			viewercount: 5,
			userlogo: '/sample/55555.png',
			userid: 'sample',
			category: 'Game',
		},
		{
			username: '샘플스트리머6',
			thumbnailurl: '/sample/66666.png',
			channelid: 'sample',
			streamname: '샘플영상6',
			viewercount: 6,
			userlogo: '/sample/66666.png',
			userid: 'sample',
			category: 'Just Chatting',
		},
		{
			username: '샘플스트리머7',
			thumbnailurl: '/sample/77777.png',
			channelid: 'sample',
			streamname: '샘플영상7',
			viewercount: 7,
			userlogo: '/sample/77777.png',
			userid: 'sample',
			category: 'Game',
		},
	];
	return (
		<>
			<ul className={styles.vodList}>
				{data_.map((item) => (
					<li className={styles.vodItem} key={item.idx}>
						<Link href={`/video/sample`} style={{ textDecoration: 'none' }}>
							<div className={styles.smallCard}>
								<Image className={styles.thumbnail} src={item.thumbnailurl} width={150} height={85} alt='섬네일' />
								<div>
									<p className={styles.title}>{item.streamname}</p>
									<p className={styles.streamer}>{item.username}</p>
									<div>
										<span className={styles.streamer}>조회수 {item.viewercount}회 </span>
										<span className={styles.streamer}>{new Date(Date.now()).toLocaleDateString()}</span>
									</div>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
