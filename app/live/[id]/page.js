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
				<div className={styles.chat}>
					<div className={styles.chatlabel}>위에 라벨</div>
					<div className={styles.chatlog}>실제채팅</div>
					<div className={styles.chatform}>
						<div className={styles.chatinput}>
							<input className={styles.text}></input>
						</div>
						<div className={styles.chatsubmit}>
							<button>전송</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
