'use client';
import Image from 'next/image';
import styles from './page.module.css';
import LargeCards from '@/util/largeCards';
import useSWR from 'swr';

export default function LiveSuggestion() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-cache' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/live`, fetcher);
	if (isLoading) {
		return (
			<>
				<section>
					<p>로딩중입니다...</p>
				</section>
			</>
		);
	}
	if (error) {
		return (
			<>
				<section>
					<p>로딩중 에러발생</p>
				</section>
			</>
		);
	}
	/**
	 * @type {{sample_channel:[{username,thumbnailurl, channelid,streamname,streamurl,viewerCount,userlogo}],main_live:[{username,thumbnailurl,channelid,streamname,streamurl,viewerCount,userlogo}],recommend_channel:[{username,thumbnailurl,channelid,streamname,streamurl,viewerCount,userlogo}]}}
	 */
	const data_ = data.data;
	console.log(data_);
	return (
		<>
			<section>
				<LargeCards list={data_.main_live} />
			</section>
		</>
	);
}
