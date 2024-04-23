'use client';

import useSWR from 'swr';
import styles from './chat.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ChatLog({ id }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/video`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (error) {
		return <></>;
	}
	if (isLoading) {
		return <></>;
	}
	console.log(data);
	return (
		<>
			<ul className={styles.vodList}>
				<li className={styles.vodItem}>
					<Link href={''}>
						<div className={styles.smallCard}>
							<Image className={styles.thumbnail} src={'/aws.png'} width={150} height={85} alt='섬네일' />
							<div>
								<p className={styles.title}>동해물과 백두산이 마르고닳도록 하느님이 보우하사 우리나라만세</p>
								<p className={styles.streamer}>스트리머</p>
								<div>
									<span className={styles.streamer}>조회수</span>
									<span className={styles.streamer}>업로드시간</span>
								</div>
							</div>
						</div>
					</Link>
				</li>
			</ul>
		</>
	);
}
