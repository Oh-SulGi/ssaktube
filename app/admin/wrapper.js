'use client';

import useSWR from 'swr';
import Censor from './censor';

export default function Wrapper({ children }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/user/properties/detail`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (isLoading) {
		return (
			<>
				<p>로딩중</p>
			</>
		);
	}
	if (error) {
		return (
			<>
				<p>에러발생</p>
			</>
		);
	}
	/**
	 * @type {{ingestendpoint,streamkey,issensor,isstream,sensorlist,email,server,sensorcount,channelid,ischannel,streamname,isadmin,userid,streamurl,userlogo,username,favorite,thumbnailurl,category}}
	 */
	const data_ = data.data;
	console.log(data_);
	if (!data_.isadmin) {
		return <div>관리자가 아닙니다.</div>;
	}
	return (
		<>
			<Censor />
		</>
	);
}
