import { cookies } from 'next/headers';
import styles from './buttons.module.css';
import ButtonDark from './buttonDark';
import ButtonLogin from './buttonLogin';
import ButtonMy from './buttonMy';

export default function Buttons() {
	const cookieStore = cookies();
	const user_id = cookieStore.get('user_id')?.value;
	const user_logo = cookieStore.get('user_logo')?.value;
	console.log(user_id);
	console.log(user_logo);
	return (
		<div className={styles.btns}>
			<ButtonDark />
			{user_id ? <ButtonMy /> : <ButtonLogin />}
		</div>
	);
}
