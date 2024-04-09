import styles from './chat.module.css';
import ChatLable from './chatLable';
import ChatLog from './chatLog';

export default function Chat({ id }) {
	return (
		<>
			<div className={styles.chat}>
				<ChatLable />
				<ChatLog id={id} />
			</div>
		</>
	);
}
