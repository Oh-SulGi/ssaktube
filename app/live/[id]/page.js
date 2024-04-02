import Live from './live';
import IVSscript from './script';

export default function Page() {
	const playbackUrl = 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
	// const PlayerState = IVSPlayer.PlayerState;
	// const PlayerEventType = IVSPlayer.PlayerEventType;
	// const player = IVSPlayer.create();
	// player.attachHTMLVideoElement(videoPlayer);
	return (
		<>
			<div>
				<Live src={playbackUrl} />
				<div>방송정보</div>
			</div>
			<div>채팅룸</div>
		</>
	);
}
