import Image from 'next/image';
import styles from './page.module.css';

export default function Page() {
	return (
		<section className={styles.main}>
			<section className={styles.preview}>
				<div className={styles.previewLive}>추천 자동재생 + 7개정도 좌우로</div>
			</section>
			<section>생방송 추천 한 2줄</section>
			<section>VOD 추천 한 3줄</section>
			<section>카테고리</section>
		</section>
	);
}
