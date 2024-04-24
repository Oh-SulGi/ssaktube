'use client';
import Profile from './profile';
import Stream from './stream';
import useSWR from 'swr';

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
	console.log('myWrapper');
	console.log(data_);
	console.log('---------');
	return (
		<>
			<Profile username={data_.username} myinfo_={data_.introduce} />
			<Stream
				channelid={data_.channelid}
				userid={data_.userid}
				ischannel={data_.ischannel}
				ingestendpoint={data_.ingestendpoint}
				streamkey={data_.streamkey}
				streamname={data_.streamname}
				isstream={data_.isstream}
				category={data_.category}
			/>
		</>
	);
}
