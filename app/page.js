import Image from 'next/image';
import styles from './page.module.css';
import LargeCard from '@/util/largeCard';
import LargeCards from '@/util/largeCards';
import LiveSuggestion from './liveSuggestion';

export default function Page() {
	const templist = [{ username: '스트리머1', streamerLogo: '/aws.png', thumbnailurl: '/aws.png', streamname: '방송제목1', id: '8XkHHxGmgjCw' }];
	return (
		<section className={styles.main}>
			<section className={styles.preview}>
				<div className={styles.previewLive}>추천 자동재생 + 7개정도 좌우로</div>
			</section>
			<LiveSuggestion />
			<section>VOD 추천 한 3줄</section>
			<section>카테고리</section>
		</section>
	);
}
