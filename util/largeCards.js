import LargeCard from './largeCard';
import styles from './largeCards.module.css';

/**
 *
 * @param {Object} param0
 * @param {[{m3u8, streamer, streamerLogo, thumbnail, title}]} param0.list
 * @returns
 */
export default function LargeCards({ list }) {
	return (
		<ul className={styles.cardlist}>
			{list.map((item) => (
				<li key={item.m3u8} className={styles.card}>
					<LargeCard
						m3u8={item.m3u8}
						streamer={item.streamer}
						streamerLogo={item.streamerLogo}
						thumbnail={item.thumbnail}
						title={item.title}
						ID={item.id}
					/>
				</li>
			))}
		</ul>
	);
}
