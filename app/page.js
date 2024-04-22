import Image from 'next/image';
import styles from './page.module.css';
import LargeCard from '@/util/largeCard';
import LargeCards from '@/util/largeCards';
import LiveSuggestion from './liveSuggestion';

export default function Page() {
	// const templist = [{ username: '스트리머1', streamerLogo: '/aws.png', thumbnailurl: '/aws.png', streamname: '방송제목1', id: '8XkHHxGmgjCw' }];
	return (
		<section className={styles.main}>
			<LiveSuggestion />
		</section>
	);
}
