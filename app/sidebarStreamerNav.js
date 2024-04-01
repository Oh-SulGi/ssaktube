'use client';
import Image from 'next/image';
import styles from './sidebarStreamerNav.module.css';

export default function SidebarStreamerNav({ children }) {
	const test_streamers = [
		{
			streamerName: '스트리머1',
			streamName: '방송제목',
			streamerIcon: '/aws.png',
			viewer: 12,
		},
		{
			streamerName: '스트리머2',
			streamName: '방송제목',
			streamerIcon: '/aws.png',
			viewer: 13,
		},
	];
	return (
		<div className={styles.channels}>
			<div className={styles.channelsTitle}>
				<label>추천채널</label>
				<div>
					<button>새로고침</button>
					<button>축소확대</button>
				</div>
			</div>
			<hr />
			<div className={styles.streamers}>
				{test_streamers.map((streamer) => (
					<div className={styles.streamer} key={streamer.streamerName}>
						<Image className={styles.streamLogo} src={streamer.streamerIcon} width={30} height={30} alt='스트리머 아이콘'></Image>
						<div className={styles.streamInfo}>
							<p>{streamer.streamerName}</p>
							<p>{streamer.streamName}</p>
						</div>
						<span>{streamer.viewer}</span>
					</div>
				))}
			</div>
		</div>
	);
}
