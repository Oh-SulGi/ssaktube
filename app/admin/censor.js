'use client';

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
	console.log(data.data);
	return (
		<div>
			<h2>검열리스트</h2>
			<div>
				<div>
					<div>
						<label>검열된사람1</label>
						<button>죽이기</button>
					</div>
					<div>
						<div>
							<div>검열된 이미지</div>
							<p>검열된시간</p>
						</div>
						<div>
							<div>검열된 이미지</div>
							<p>검열된시간</p>
						</div>
						<div>
							<div>검열된 이미지</div>
							<p>검열된시간</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
