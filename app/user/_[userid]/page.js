import Community from './community';
import Preview from './livepreview';
import styles from './page.module.css';
import Videos from './videos';

export default function Page({ params }) {
	return (
		<>
			<section className={styles.main}>
				<Preview userid={params.userid} />
				<Videos userid={params.userid} />
				<Community userid={params.userid} />
			</section>
		</>
	);
}
