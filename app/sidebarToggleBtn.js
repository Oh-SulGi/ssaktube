'use client';
import styles from './sidebarToggleBtn.module.css';

export default function SidebarToggleBtn({ children }) {
	return (
		<button className={styles.togglebtn}>
			<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' className='header_icon__8SHkt'>
				<g clipPath='url(#clip0_1128_3162)'>
					<rect x='11' y='13' width='18' height='2' rx='1' fill='currentColor'></rect>
					<rect x='11' y='19' width='18' height='2' rx='1' fill='currentColor'></rect>
					<rect x='11' y='25' width='18' height='2' rx='1' fill='currentColor'></rect>
				</g>
			</svg>
		</button>
	);
}
