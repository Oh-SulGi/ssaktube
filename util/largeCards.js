import LargeCard from './largeCard';
import styles from './largeCards.module.css';

/**
 *
 * @param {Object} param0
 * @param {[{ streamer, streamerLogo, thumbnail, title, id}]} param0.list
 * @returns
 */
export default function LargeCards({ list }) {
	return (
		<ul className={styles.cardlist}>
			{list.map((item) => (
				<li key={item.m3u8} className={styles.card}>
					<LargeCard streamer={item.streamer} streamerLogo={item.streamerLogo} thumbnail={item.thumbnail} title={item.title} ID={item.id} />
				</li>
			))}
		</ul>
	);
}
