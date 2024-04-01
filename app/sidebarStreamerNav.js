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
					<button className={styles.resetbtn}>
						<svg width='10px' height='10px' viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								<path
									d='M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0'
									fill-rule='evenodd'
								></path>
							</g>
						</svg>
					</button>
					<button className={styles.openbtn}>
						<svg width='10px' height='10px' viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								<path d='m.08 568.063 176.13-176.13 783.988 783.864 783.74-783.864 176.129 176.13-959.87 960.118z' fill-rule='evenodd'></path>
							</g>
						</svg>
						{/* <svg width='10px' height='10px' viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								<path d='m.08 1351.937 176.13 176.13 783.988-783.864 783.74 783.864 176.129-176.13-959.87-960.118z' fill-rule='evenodd'></path>
							</g>
						</svg> */}
					</button>
				</div>
			</div>
			<hr />
			<div className={styles.streamers}>
				{test_streamers.map((streamer) => (
					<div className={styles.streamer} key={streamer.streamerName}>
						<Image className={styles.streamLogo} src={streamer.streamerIcon} width={26} height={26} alt='스트리머 아이콘'></Image>
						<div className={styles.streamInfo}>
							<p>{streamer.streamerName}</p>
							<p>{streamer.streamName}</p>
						</div>
						<span className={styles.viewer}>{streamer.viewer}</span>
					</div>
				))}
			</div>
		</div>
	);
}
