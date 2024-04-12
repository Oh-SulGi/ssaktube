import { cookies } from 'next/headers';
import Chat from './chat';
import Live from './live';
import styles from './page.module.css';

export default function Page({ params }) {
	const cookiestore = cookies();
	// const playbackUrl = 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
	return (
		<>
			<div className={styles.layout}>
				<div className={styles.stream}>
					<Live id={params.id} />
				</div>
				<Chat id={params.id} />
			</div>
		</>
	);
}
