import { cookies } from 'next/headers';
import styles from './buttons.module.css';
import ButtonDark from './buttonDark';
import ButtonLogin from './buttonLogin';
import ButtonMy from './buttonMy';

export default function Buttons() {
	const cookieStore = cookies();
	const userid = cookieStore.get('userid')?.value;
	const user_logo = cookieStore.get('user_logo')?.value;
	const id_token = cookieStore.get('id_token')?.value;
	const access_token = cookieStore.get('access_token')?.value;
	console.log(userid);
	console.log(user_logo);
	console.log(id_token);
	console.log(access_token);
	return (
		<div className={styles.btns}>
			<ButtonDark />
			{userid ? <ButtonMy userid={userid} userLogo={user_logo} /> : <ButtonLogin />}
		</div>
	);
}
