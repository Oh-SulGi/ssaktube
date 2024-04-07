import Image from 'next/image';
import styles from './largeCard.module.css';
import Link from 'next/link';

export default function LargeCard({ thumbnail, title, streamer, streamerLogo, ID }) {
	return (
		<Link href={`/live/${ID}`} className={styles.card}>
			<div className={styles.image}>
				<Image src={thumbnail} alt='섬네일' fill={true} />
			</div>
			<div className={styles.caption}>
				<Image className={styles.streamerLogo} src={streamerLogo} alt='스트리머 이미지' width={40} height={40} />
				<div className={styles.info}>
					<p>{title}</p>
					<p>{streamer}</p>
					<button>스트리밍카테고리</button>
				</div>
			</div>
		</Link>
	);
}
