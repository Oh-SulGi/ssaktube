'use client';

import useSWR from 'swr';
import styles from './chat.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ChatLog({ id }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/vod/recent`, fetcher, {
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
	/**
	 * @type {[{idx,userid,channelid,replayurl,recordingstart,recordingend,viewercount,streamname,username,userlogo}]}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<ul className={styles.vodList}>
				{data_.map((item) => (
					<li className={styles.vodItem} key={item.idx}>
						<Link href={''}>
							<div className={styles.smallCard}>
								<Image className={styles.thumbnail} src={`${item.replayurl}media/thumbnails/thumb0.jpg`} width={150} height={85} alt='섬네일' />
								<div>
									<p className={styles.title}>{item.streamname}</p>
									<p className={styles.streamer}>{item.username}</p>
									<div>
										<span className={styles.streamer}>조회수 {item.viewercount}회 </span>
										<span className={styles.streamer}>{new Date(item.recordingstart).toLocaleDateString()}</span>
									</div>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
