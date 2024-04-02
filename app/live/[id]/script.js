import Script from 'next/script';

export default function IVSscript() {
	return <Script src='https://player.live-video.net/1.22.0/amazon-ivs-player.min.js' strategy='afterInteractive' />;
}
