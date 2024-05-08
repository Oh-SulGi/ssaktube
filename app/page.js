import Image from 'next/image';
import styles from './page.module.css';
import dynamic from 'next/dynamic';

export default function Page() {
	const LiveSuggestion = dynamic(() => import('./liveSuggestion'), {
		ssr: false,
	});
	// const templist = [{ username: '스트리머1', streamerLogo: '/aws.png', thumbnailurl: '/aws.png', streamname: '방송제목1', id: '8XkHHxGmgjCw' }];
	return (
		<section className={styles.main}>
			<LiveSuggestion />
		</section>
	);
}
