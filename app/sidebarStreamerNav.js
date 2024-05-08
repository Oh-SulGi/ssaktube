'use client';

import Image from 'next/image';
import styles from './sidebarStreamerNav.module.css';
import { useAppSelector } from '@/util/redux/hooks';
import Link from 'next/link';
import { useState } from 'react';

export default function SidebarStreamerNav({}) {
	const { isOpen } = useAppSelector((state) => state.ui);
	const [islarge, setislarge] = useState(false);

	const data_ = {
		recommend_channel: [
			{
				username: '샘플스트리머33',
				streamname: '샘플스트리밍44',
				userlogo: '/sample/33333.png',
				viewerCount: 33,
				channelid: 'sample',
			},
			{
				username: '샘플스트리머44',
				streamname: '샘플스트리밍44',
				userlogo: '/sample/44444.png',
				viewerCount: 44,
				channelid: 'sample',
			},
			{
				username: '샘플스트리머55',
				streamname: '샘플스트리밍55',
				userlogo: '/sample/55555.png',
				viewerCount: 55,
				channelid: 'sample',
			},
		],
	};
	return (
		<div className={styles.channels}>
			<div className={styles.channelsTitle}>
				{isOpen ? <label>추천채널</label> : ''}
				<div>
					<button className={styles.resetbtn}>
						<svg width='10px' height='10px' viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
							<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								<path
									d='M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0'
									fillRule='evenodd'
								></path>
							</g>
						</svg>
					</button>
					<button
						className={styles.openbtn}
						onClick={(e) => {
							setislarge((islarge) => !islarge);
						}}
					>
						{!islarge ? (
							<svg width='10px' height='10px' viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg'>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									<path
										d='m.08 568.063 176.13-176.13 783.988 783.864 783.74-783.864 176.129 176.13-959.87 960.118z'
										fillRule='evenodd'
									></path>
								</g>
							</svg>
						) : (
							<svg width='10px' height='10px' viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg'>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									<path
										d='m.08 1351.937 176.13 176.13 783.988-783.864 783.74 783.864 176.129-176.13-959.87-960.118z'
										fillRule='evenodd'
									></path>
								</g>
							</svg>
						)}
					</button>
				</div>
			</div>
			<hr />
			{!islarge ? (
				<ul className={styles.streamers}>
					{data_.recommend_channel.map((streamer) => (
						<Link href={`/live/${streamer.channelid}`} key={streamer.channelid} className={styles.link}>
							<li className={styles.streamer}>
								<Image className={styles.streamLogo} src={streamer.userlogo} width={28} height={28} alt='스트리머 아이콘' />
								{isOpen ? (
									<>
										<div className={styles.streamInfo}>
											<p>{streamer.username}</p>
											<p>{streamer.streamname}</p>
										</div>
										<span className={styles.viewer}>{streamer.viewerCount}</span>
									</>
								) : (
									<></>
								)}
							</li>
						</Link>
					))}
				</ul>
			) : (
				''
			)}
		</div>
	);
}
// recommend_channel:[{username,thumbnailurl,channelid,streamname,streamurl,viewerCount}]
