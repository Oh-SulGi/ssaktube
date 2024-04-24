'use client';

import styles from './censor.module.css';
import Image from 'next/image';
import useSWR from 'swr';

export default function Censor() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/channel/listban`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (error) {
		return <div>에러발생</div>;
	}
	if (isLoading) {
		return <div>로딩중</div>;
	}

	/**
	 * @type {[{channelid, censorlist:[],streamname,userid,streamkey,userlogo,username}]}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<div>
			<h2 className={styles.header}>검열리스트</h2>
			<hr />
			<div>
				{data_.map((item) => (
					<div key={item.channelid}>
						<div className={styles.label}>
							<Image src={item.userlogo} width={40} height={40} alt='스트리머로고' className={styles.logo} />
							<h2 className={styles.username}>{item.username}</h2>
							<button>죽이기</button>
						</div>
						<div className={styles.list}>
							{item.censorlist.map((timestamp_, index) => (
								<div key={index} className={styles.item}>
									<Image
										src={`https://rekognition-sesac-test.s3.ap-northeast-1.amazonaws.com/${item.channelid}/${timestamp_}.jpg`}
										alt='검열된이미지'
										width={320}
										height={180}
									/>
									<p>
										{new Date(timestamp_ * 1000).toLocaleDateString()} {new Date(timestamp_ * 1000).toLocaleTimeString()}
									</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
