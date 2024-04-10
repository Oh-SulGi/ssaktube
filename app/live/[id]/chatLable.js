'use client';
import { useAppDispatch, useAppSelector } from '@/util/redux/hooks';
import styles from './chat.module.css';
import { toggleIsChatOpen } from '@/util/redux/reducers/chat';

export default function ChatLable() {
	const dispatch = useAppDispatch();
	return (
		<>
			<div className={styles.chatlabel}>
				<div
					onClick={(e) => {
						dispatch(toggleIsChatOpen());
						document.getElementById('chatsection').classList.toggle(styles.close);
					}}
				>
					<button>
						<svg
							width='28'
							height='28'
							viewBox='0 0 28 28'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='live_chatting_header_icon__vvNPu'
						>
							<rect x='9' y='20' width='2' height='12' rx='1' transform='rotate(-180 9 20)' fill='currentColor'></rect>
							<rect x='22' y='15' width='10' height='2' rx='1' transform='rotate(-180 22 15)' fill='currentColor'></rect>
							<path
								d='M17 18L20.7879 14.2121C20.905 14.095 20.905 13.905 20.7879 13.7879L17 10'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							></path>
						</svg>
					</button>
				</div>
				<div>채팅</div>
				<div>
					<button style={{ visibility: 'hidden' }}>
						<svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
							<rect width='36' height='36' rx='10' fill='#19191C' fillOpacity='0.5'></rect>
							<g filter='url(#filter0_d_11440_95002)'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M29.4949 16.7542C29.3448 12.4148 25.8263 9 21.6089 9L14.492 9.0002C10.312 9.00021 6.70649 12.3209 6.50881 16.6617C6.29957 21.2601 9.84387 25.0642 14.2974 25.0642H19.3504V26.4843C19.3504 27.8156 20.8737 28.4717 21.8344 27.6133C23.1556 26.4331 25.8355 24.0335 26.9124 23.035C28.5683 21.4991 29.5813 19.2437 29.4949 16.7542ZM12.04 17.1429C12.04 16.231 12.785 15.5 13.6939 15.5C14.6028 15.5 15.3477 16.231 15.3477 17.1429C15.3477 18.0547 14.6028 18.7857 13.6939 18.7857C12.785 18.7857 12.04 18.0547 12.04 17.1429ZM16.3477 17.1429C16.3477 16.231 17.0926 15.5 18.0015 15.5C18.9104 15.5 19.6553 16.231 19.6553 17.1429C19.6553 18.0547 18.9104 18.7857 18.0015 18.7857C17.0926 18.7857 16.3477 18.0547 16.3477 17.1429ZM20.6553 17.1429C20.6553 16.231 21.4002 15.5 22.3091 15.5C23.218 15.5 23.963 16.231 23.963 17.1429C23.963 18.0547 23.218 18.7857 22.3091 18.7857C21.4002 18.7857 20.6553 18.0547 20.6553 17.1429Z'
									fill='white'
								></path>
							</g>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
}
