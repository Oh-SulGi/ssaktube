import Image from 'next/image';
import styles from './page.module.css';
import LargeCard from '@/util/largeCard';
import LargeCards from '@/util/largeCards';

export default function Page() {
	const templist = [{ streamer: '스트리머1', streamerLogo: '/aws.png', thumbnail: '/aws.png', title: '방송제목1', id: 'HEmFEkJQDcW4' }];
	return (
		<section className={styles.main}>
			<section className={styles.preview}>
				<div className={styles.previewLive}>추천 자동재생 + 7개정도 좌우로</div>
			</section>
			<section>
				<LargeCards list={templist} />
			</section>
			<section>생방송 추천 한 2줄</section>
			<section>VOD 추천 한 3줄</section>
			<section>카테고리</section>
		</section>
	);
}
