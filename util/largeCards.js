import LargeCard from './largeCard';
import styles from './largeCards.module.css';

/**
 *
 * @param {Object} param0
 * @param {[{ username, userlogo, thumbnailurl, streamname, channelid}]} param0.list
 * @returns
 */
export default function LargeCards({ list }) {
	return (
		<ul className={styles.cardlist}>
			{list.map((item) => (
				<li key={item.channelid} className={styles.card}>
					<LargeCard
						username={item.username}
						userlogo={item.userlogo}
						thumbnailurl={item.thumbnailurl}
						streamname={item.streamname}
						id={item.channelid}
					/>
				</li>
			))}
		</ul>
	);
}
