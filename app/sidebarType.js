'use client';
import styles from './sidebarType.module.css';

export default function SidebarType() {
	return (
		<div className={styles.type}>
			<ul>
				<li>
					<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
						<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
						<g id='SVGRepo_iconCarrier'>
							<path
								d='M9.5 9V15M6.5 12H12.5M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z'
								stroke='#000000'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							></path>
						</g>
					</svg>
					<p>생방송</p>
				</li>
				<li>
					<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
						<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<path
								d='M18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3Z'
								stroke='#000000'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							></path>{' '}
							<path d='M2 7H22' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path>{' '}
							<path d='M12 7V3' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path>{' '}
							<path d='M7 7V3' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path>{' '}
							<path d='M17 7V3' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path>{' '}
						</g>
					</svg>
					<p>VOD</p>
				</li>
				<li>
					<svg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg' fill='#000000'>
						<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
						<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<title>category</title>{' '}
							<g id='Layer_2' data-name='Layer 2'>
								{' '}
								<g id='invisible_box' data-name='invisible box'>
									{' '}
									<rect width='48' height='48' fill='none'></rect>{' '}
								</g>{' '}
								<g id='icons_Q2' data-name='icons Q2'>
									{' '}
									<path d='M24,7.7,29.3,16H18.6L24,7.7M24,2a2.1,2.1,0,0,0-1.7,1L13.2,17a2.3,2.3,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H33a2.1,2.1,0,0,0,1.7-1,1.8,1.8,0,0,0,0-2l-9-14A1.9,1.9,0,0,0,24,2Z'></path>{' '}
									<path d='M43,43H29a2,2,0,0,1-2-2V27a2,2,0,0,1,2-2H43a2,2,0,0,1,2,2V41A2,2,0,0,1,43,43ZM31,39H41V29H31Z'></path>{' '}
									<path d='M13,28a6,6,0,1,1-6,6,6,6,0,0,1,6-6m0-4A10,10,0,1,0,23,34,10,10,0,0,0,13,24Z'></path>{' '}
								</g>{' '}
							</g>{' '}
						</g>
					</svg>
					<p>카테고리</p>
				</li>
			</ul>
		</div>
	);
}
