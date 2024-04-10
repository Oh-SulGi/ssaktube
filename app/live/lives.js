'use client';

import LargeCards from '@/util/largeCards';
import useSWR from 'swr';

export default function Lives() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/lives`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (isLoading) {
		return (
			<>
				<div>로딩중 입니다.</div>
			</>
		);
	}
	if (error) {
		return (
			<>
				<div>로딩중 에러가 발생했 습니다..</div>
			</>
		);
	}
	/**
	 * @type {{page_channels:[{channelid,streamname,streamurl,userlogo,username,thumbnailurl,viewerCount}]}}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<section>
				<LargeCards list={data_.page_channels} />
			</section>
		</>
	);
}
