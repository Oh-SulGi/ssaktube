import { cookies } from 'next/headers';
import styles from './chat.module.css';
import ChatLable from './chatLable';
import ChatLog from './chatLog';

export default function Chat({ id }) {
	const cookieStore = cookies();
	const id_token = cookieStore.get('id_token')?.value;
	const access_token = cookieStore.get('access_token')?.value;
	return (
		<>
			<div className={styles.chat} id='chatsection'>
				<ChatLable />
				<ChatLog id={id} login={id_token ? true : false} />
			</div>
		</>
	);
}
