'use client';

import styles from './censor.module.css';
import Image from 'next/image';
import useSWR from 'swr';

export default function Censor() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading, mutate } = useSWR(`/api/channel/censorlist`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (error) {
		return (
			<div>
				<h2 className={styles.header}>검열리스트</h2>
				<hr />
				<div>에러발생</div>
			</div>
		);
	}
	if (isLoading) {
		return (
			<div>
				<h2 className={styles.header}>검열리스트</h2>
				<hr />
				<div>로딩중</div>
			</div>
		);
	}

	/**
	 * @type {[{channelid, censorlist:[],streamname,userid,streamkey:string,userlogo,username}]}
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
							<button
								className={styles.sortBtn}
								onClick={(e) => {
									const streamkey = item.streamkey.split('_')[2];
									fetch(`/api/channel/ban`, { method: 'POST', body: JSON.stringify({ channelid: item.channelid, streamkey }) })
										.then((res) => {
											if (!res.ok) {
												throw new Error(`/api/channel/ban 에러 : ${res.status}`);
											}
											return res.json();
										})
										.then((data) => {
											if (data.data.action == 'follow') {
												console.log('밴완료');
											}
											mutate({}, { populateCache: false });
											alert('사용자를 차단하였습니다.');
											window.location.reload();
										})
										.catch((error) => {
											console.log(error);
										});
								}}
							>
								차단
							</button>
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
