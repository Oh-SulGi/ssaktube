import Image from 'next/image';
import styles from './largeCard.module.css';
import Link from 'next/link';

export default function LargeCard({ thumbnailurl, streamname, username, userlogo, id, userid, viewerCount, type = 'live', style = {} }) {
	const content = () => {
		if (type == 'live') {
			return (
				<>
					<span className={styles.live}>LIVE</span>
					<span className={styles.viewercount}>{viewerCount}명 시청</span>
				</>
			);
		}
		if (type == 'replay') {
			return (
				<>
					<span className={styles.replay}>REPLAY</span>
				</>
			);
		}
		return (
			<>
				<span className={styles.vod}>VOD</span>
			</>
		);
	};

	return (
		<div className={styles.card} style={style}>
			<div className={styles.viewer}>{content()}</div>
			<div className={styles.image}>
				<Link href={type == 'live' ? `/live/${id}` : `/video/${id}`} className={styles.link}>
					<Image src={thumbnailurl} alt='섬네일' fill={true} sizes={100} />
				</Link>
			</div>
			<div className={styles.caption}>
				<Link href={`/live/${id}`} className={styles.link}>
					<Image className={styles.streamerLogo} src={userlogo} alt='스트리머 이미지' width={40} height={40} />
				</Link>
				<div className={styles.info}>
					<Link href={`/live/${id}`} className={styles.link}>
						<p className={styles.streamname}>{streamname}</p>
					</Link>
					<Link href={`/user/${userid}`} className={styles.link}>
						<p className={styles.username}>{username}</p>
					</Link>
					<p className={styles.category}>카테고리</p>
				</div>
			</div>
		</div>
	);
}
