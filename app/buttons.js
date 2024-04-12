'use server';
import { cookies } from 'next/headers';
import styles from './buttons.module.css';
import ButtonDark from './buttonDark';
import ButtonLogin from './buttonLogin';
import ButtonMy from './buttonMy';

export default async function Buttons() {
	/**
	 * @type {{data:{userid}}}
	 */
	const data_ = await getData();
	const data = data_?.data;

	return (
		<div className={styles.btns}>
			<ButtonDark />
			{data?.userid ? (
				<ButtonMy userid={data.userid} userLogo={`https://streamer-userlogo.s3.ap-northeast-1.amazonaws.com/${data.userid}.jpg`} />
			) : (
				<ButtonLogin />
			)}
		</div>
	);
}
async function getData() {
	const cookieStore = cookies();
	const id_token = cookieStore.get('id_token')?.value;
	const access_token = cookieStore.get('access_token')?.value;
	if (id_token) {
		const res = await fetch(`${process.env.NEXT_PUBLIC_FETCHURL}/api/user/properties`, {
			method: 'POST',
			cache: 'no-store',
			body: JSON.stringify({ id_token, access_token }),
		});

		console.log(res.status);
		if (!res.ok) {
			await fetch(`${process.env.NEXT_PUBLIC_FETCHURL}/api/cookies`, { method: 'DELETE', body: JSON.stringify({ list: ['id_token', 'access_token'] }) });
			return {};
		}

		return res.json();
	}
}
