import Chat from './chat';
import Live from './live';
import styles from './page.module.css';

export default function Page() {
	const playbackUrl = 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
	return (
		<>
			<div className={styles.layout}>
				<div className={styles.stream}>
					<Live src={playbackUrl} />
					<div>
						<p>스트림정보</p>
					</div>
				</div>
				<Chat />
			</div>
		</>
	);
}
