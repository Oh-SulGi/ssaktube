'use client';
import Image from 'next/image';
import styles from './user.module.css';
import useSWR from 'swr';
import FollowBtn from '@/util/followBtn';

export default function User({ userid }) {
	return (
		<div className={styles.streamerwrapper}>
			<div className={styles.streamerLogoWrapper}>
				<Image className={styles.streamerLogo} src={'/sample/11111.png'} height={80} width={80} alt='스트리머로고' placeholder={'empty'} />
			</div>
			<div className={styles.streamer}>
				<div className={styles.streamerName}>
					<span>샘플스트리머이름</span>
					<FollowBtn target_userid={''} />
				</div>
				<div className={styles.streamerDetail}>
					<p>팔로워 XX명</p>
				</div>
				<div className={styles.streamerInfo}>
					<p>샘플 자기소개</p>
				</div>
			</div>
		</div>
	);
}
