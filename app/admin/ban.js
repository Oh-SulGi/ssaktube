'use client';

import styles from './ban.module.css';
import Image from 'next/image';
import useSWR from 'swr';

export default function Ban() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading, mutate } = useSWR(`/api/channel/banlist`, fetcher, {
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
			<h2 className={styles.header}>밴리스트</h2>
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
									fetch(`/api/channel/unban/${item.channelid}`, { method: 'POST' })
										.then((res) => {
											if (!res.ok) {
												throw new Error(`/api/channel/unban 에러 : ${res.status}`);
											}
											return res.json();
										})
										.then((data) => {
											if (data.data.action == 'follow') {
												console.log('언밴완료');
											}
											mutate({}, { populateCache: false });
										})
										.catch((error) => {
											console.log(error);
										});
								}}
							>
								살리기
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
