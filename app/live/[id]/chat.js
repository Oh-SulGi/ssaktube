import styles from './chat.module.css';
import ChatLable from './chatLable';
import ChatLog from './chatLog';

export default function Chat({ id, user_logo, userid }) {
	return (
		<>
			<div className={styles.chat} id='chatsection'>
				<ChatLable />
				<ChatLog id={id} user_logo={user_logo} userid={userid} />
			</div>
		</>
	);
}
