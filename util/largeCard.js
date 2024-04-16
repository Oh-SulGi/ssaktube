import Image from 'next/image';
import styles from './largeCard.module.css';
import Link from 'next/link';

export default function LargeCard({
	thumbnailurl,
	streamname,
	username,
	userlogo,
	id,
	userid,
	viewerCount,
	type = 'live',
	style = {},
	starttime,
	endtime,
	isCategory = true,
}) {
	const Content = () => {
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
	const TotalTime = () => {
		let diff = Math.floor((new Date(endtime).getTime() - new Date(starttime).getTime()) / 1000);
		const diffh = Math.floor(diff / 3600);
		diff = diff % 3600;
		const diffm = Math.floor(diff / 60);
		const diffs = diff % 60;
		return (
			<span className={styles.viewercount}>
				{diffh}:{diffm}:{diffs}
			</span>
		);
	};
	const ViewCountAndDate = () => {
		const date = new Date(starttime);
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDay();
		return (
			<div>
				<span className={styles.username}>조회수 {viewerCount}회</span>
				<span className={styles.username}>
					{year}.{month}.{day}
				</span>
			</div>
		);
	};

	return (
		<div className={styles.card} style={style}>
			<div className={styles.viewer}>
				<Content />
			</div>
			{type == 'live' ? (
				''
			) : (
				<div className={styles.length}>
					<TotalTime />
				</div>
			)}

			<div className={styles.date}></div>
			<div className={styles.image}>
				<Link href={type == 'live' ? `/live/${id}` : `/video/${id}`} className={styles.link}>
					<Image src={thumbnailurl} alt='섬네일' fill={true} sizes={100} />
				</Link>
			</div>
			<div className={styles.caption}>
				<Link href={`/user/${userid}`} className={styles.link}>
					<Image className={styles.streamerLogo} src={userlogo} alt='스트리머 이미지' width={40} height={40} />
				</Link>
				<div className={styles.info}>
					<Link href={`/live/${id}`} className={styles.link}>
						<p className={styles.streamname}>{streamname}</p>
					</Link>
					<Link href={`/user/${userid}`} className={styles.link}>
						<p className={styles.username}>{username}</p>
					</Link>
					<div className={styles.etc}>
						{type == 'live' ? '' : <ViewCountAndDate />}
						{isCategory ? <span className={styles.category}>카테고리</span> : ''}
					</div>
				</div>
			</div>
		</div>
	);
}
