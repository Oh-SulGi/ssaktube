import dynamic from 'next/dynamic';
import styles from './page.module.css';

export default function Page({ params }) {
	const Preview = dynamic(() => import('./livepreview'), {
		ssr: false,
	});
	const Videos = dynamic(() => import('./videos'), {
		ssr: false,
	});
	const Community = dynamic(() => import('./community'), {
		ssr: false,
	});
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
