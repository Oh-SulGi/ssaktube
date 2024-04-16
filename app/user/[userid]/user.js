'use client';
import Image from 'next/image';
import styles from './user.module.css';
import useSWR from 'swr';

export default function User({ userid }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store', next: { revalidate: 0 }, method: 'POST' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/user/${userid}`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateOnMount: true,
	});
	if (isLoading) {
		return (
			<div className={styles.streamerwrapper}>
				<div className={styles.streamerLogoWrapper}>
					<Image className={styles.streamerLogo} src={''} height={80} width={80} alt='스트리머로고' placeholder={'empty'} />
				</div>
				<div className={styles.streamer}>
					<div className={styles.streamerName}>
						<span>로딩중...</span>
						<div className={styles.btns}>
							<button className={styles.followBtn}>팔로우</button>
						</div>
					</div>
					<div className={styles.streamerDetail}>
						<p></p>
					</div>
					<div className={styles.streamerInfo}>
						<p></p>
					</div>
				</div>
			</div>
		);
	}
	if (error) {
		return (
			<div className={styles.streamerwrapper}>
				<div className={styles.streamerLogoWrapper}>
					<Image className={styles.streamerLogo} src={''} height={80} width={80} alt='스트리머로고' placeholder={'empty'} />
				</div>
				<div className={styles.streamer}>
					<div className={styles.streamerName}>
						<span>에러발생</span>
						<div className={styles.btns}>
							<button className={styles.followBtn}>팔로우</button>
						</div>
					</div>
					<div className={styles.streamerDetail}>
						<p></p>
					</div>
					<div className={styles.streamerInfo}>
						<p></p>
					</div>
				</div>
			</div>
		);
	}
	/**
	 * @type {{channelid,streamname,userlogo,userid,streamurl,username,thumbnailurl,viewerCount}}
	 */
	const data_ = data.data;
	return (
		<div className={styles.streamerwrapper}>
			<div className={styles.streamerLogoWrapper}>
				<Image className={styles.streamerLogo} src={data_.userlogo} height={80} width={80} alt='스트리머로고' placeholder={'empty'} />
			</div>
			<div className={styles.streamer}>
				<div className={styles.streamerName}>
					<span>{data_.username}</span>
					<div className={styles.btns}>
						<button className={styles.followBtn}>팔로우</button>
					</div>
				</div>
				<div className={styles.streamerDetail}>
					<p>팔로워 몇명</p>
				</div>
				<div className={styles.streamerInfo}>
					<p>자기소개</p>
				</div>
			</div>
		</div>
	);
}
