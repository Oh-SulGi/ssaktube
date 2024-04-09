import Image from 'next/image';
import styles from './largeCard.module.css';
import Link from 'next/link';

export default function LargeCard({ thumbnailurl, streamname, username, userlogo, id }) {
	return (
		<Link href={`/live/${id}`} className={styles.card}>
			<div className={styles.image}>
				<Image src={thumbnailurl} alt='섬네일' fill={true} />
			</div>
			<div className={styles.caption}>
				<Image className={styles.streamerLogo} src={userlogo} alt='스트리머 이미지' width={40} height={40} />
				<div className={styles.info}>
					<p>{streamname}</p>
					<p>{username}</p>
					<button>스트리밍카테고리</button>
				</div>
			</div>
		</Link>
	);
}
