import Image from 'next/image';
import styles from './chat.module.css';

export default function Chat() {
	return (
		<>
			<div className={styles.chat}>
				<div className={styles.chatlabel}>
					<div>
						<button>확축</button>
					</div>
					<div>채팅</div>
					<div>
						<button>더보기</button>
					</div>
				</div>
				<div className={styles.chatlog}>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</p>
					</div>
					<div className={styles.chatwrap}>
						<Image className={styles.chaticon} src={'/aws.png'} alt='사용자프로필' width={20} height={20} />
						<p className={styles.chatting}>우리나라만세</p>
					</div>
				</div>
				<div className={styles.chatform}>
					<div className={styles.chatinput}>
						<input className={styles.text}></input>
					</div>
					<div className={styles.chatsubmit}>
						<button>전송</button>
					</div>
				</div>
			</div>
		</>
	);
}
