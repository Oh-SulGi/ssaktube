'use client';
import { useState } from 'react';
import styles from './stream.module.css';
import { useRouter } from 'next/navigation';
import Spinner from '@/util/spinner';

export default function Stream({ ischannel, ingestendpoint, streamkey, streamname, isstream, channelid, userid, category }) {
	const [isChannel, setisChannel] = useState(ischannel);
	const [isLive, setisLive] = useState(isstream);
	const [streamnameChange, setstreamnameChange] = useState(false);
	// const [isCopied1, setisCopied1] = useState(false);
	const [isCopied2, setisCopied2] = useState(false);
	const [isCopied3, setisCopied3] = useState(false);
	const [scategory, setscategory] = useState(category);
	const [isscategory, setnisscategory] = useState(false);
	const [nstreamname, setnstreamname] = useState(streamname);
	const router = useRouter();

	return (
		<>
			<div>
				<div className={styles.stream}>
					<h2 className={styles.title}>방송설정</h2>
					<div className={styles.streamsub}>
						<svg width='64px' height='64px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
							<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								<path d='M16.5163 8.93451L11.0597 14.7023L8.0959 11.8984' stroke={isChannel ? '#00ff4c' : '#acacac'} strokeWidth='2'></path>
								<path
									d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
									strokeWidth='2'
									stroke={isChannel ? '#00ff4c' : '#acacac'}
								></path>
							</g>
						</svg>
						{isChannel ? (
							''
						) : (
							<button
								onClick={(e) => {
									fetch('/api/user/properties', { method: 'OPTIONS' })
										.then((res) => res.json())
										.then((data) => {
											const userid = data.data.userid;
											fetch('/api/channel', { method: 'PUT', body: JSON.stringify({ userid }) })
												.then((res) => res.json())
												.then((data) => {
													setisChannel(true);
													console.log(data);
													alert('방송설정완료');
													window.location.reload();
												});
										});
								}}
								className={styles.sortBtn}
							>
								방송하기
							</button>
						)}
					</div>
				</div>
				{isChannel ? (
					<div>
						<div className={styles.sub}>
							<svg width='64px' height='64px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill={isLive ? '#ff0000' : '#acacac'}>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									<g>
										<path fill='none' d='M0 0h24v24H0z'></path>{' '}
										<path
											fillRule='nonzero'
											d='M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 0 1 .215.062l4.355 2.772a.4.4 0 0 1 0 .674L7.615 15.11A.4.4 0 0 1 7 14.77V9.23c0-.221.18-.4.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z'
										></path>
									</g>
								</g>
							</svg>
							<button
								className={styles.sortBtn}
								onClick={(e) => {
									!isLive ? router.push(`/user/${userid}`) : router.push(`/live/${channelid}`);
								}}
							>
								{isLive ? '방송 바로가기버튼' : '내 정보 바로가기'}
							</button>
						</div>
						<div className={styles.sub}>
							<h4 className={styles.subtitle}>방송제목</h4>
							<div className={styles.change}>
								<input
									type='text'
									value={nstreamname}
									onChange={(e) => {
										setnstreamname(e.target.value);
									}}
								></input>
								<button
									onClick={(e) => {
										setstreamnameChange(true);
										setTimeout(() => {
											alert('방송제목 변경 완료');
											router.refresh();
											setstreamnameChange(false);
										}, 500);
									}}
								>
									변경하기
								</button>
								{streamnameChange ? (
									<div className={styles.spinner}>
										<Spinner width={30} height={30} />
									</div>
								) : (
									''
								)}
							</div>
						</div>
						<div className={styles.sub}>
							<h4 className={styles.subtitle}>방송카테고리</h4>
							<div className={styles.change}>
								<select
									value={scategory}
									onChange={(e) => {
										setscategory(e.target.value);
									}}
									style={{ background: '0 0', border: 'none', color: 'var(--color-content-01)', outline: 'none' }}
								>
									<option value={'Game'}>Game</option>
									<option value={'Just Chat'}>Just Chat</option>
								</select>
								<button
									onClick={(e) => {
										setnisscategory(true);
										setTimeout(() => {
											alert('방송제목 카테고리 변경 완료');
											router.refresh();
											setnisscategory(false);
										}, 500);
									}}
								>
									변경하기
								</button>
								{isscategory ? (
									<div className={styles.spinner}>
										<Spinner width={30} height={30} />
									</div>
								) : (
									''
								)}
							</div>
						</div>
						<div className={styles.sub}>
							<h4 className={styles.subtitle}>수집서버</h4>
							<p className={styles.content}>{ingestendpoint}</p>
							<button
								onClick={(e) => {
									// navigator.clipboard.writeText(ingestendpoint);
									const textarea = document.createElement('textarea');
									textarea.value = ingestendpoint;
									document.body.appendChild(textarea);
									textarea.select();
									document.execCommand('copy');
									document.body.removeChild(textarea);

									setisCopied2(true);
								}}
								className={styles.copybtn}
							>
								{isCopied2 ? (
									<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
										<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
										<g id='SVGRepo_iconCarrier'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M7.26279 3.25871C7.38317 2.12953 8.33887 1.25 9.5 1.25H14.5C15.6611 1.25 16.6168 2.12953 16.7372 3.25871C17.5004 3.27425 18.1602 3.31372 18.7236 3.41721C19.4816 3.55644 20.1267 3.82168 20.6517 4.34661C21.2536 4.94853 21.5125 5.7064 21.6335 6.60651C21.75 7.47348 21.75 8.5758 21.75 9.94339V16.0531C21.75 17.4207 21.75 18.523 21.6335 19.39C21.5125 20.2901 21.2536 21.048 20.6517 21.6499C20.0497 22.2518 19.2919 22.5107 18.3918 22.6317C17.5248 22.7483 16.4225 22.7483 15.0549 22.7483H8.94513C7.57754 22.7483 6.47522 22.7483 5.60825 22.6317C4.70814 22.5107 3.95027 22.2518 3.34835 21.6499C2.74643 21.048 2.48754 20.2901 2.36652 19.39C2.24996 18.523 2.24998 17.4207 2.25 16.0531V9.94339C2.24998 8.5758 2.24996 7.47348 2.36652 6.60651C2.48754 5.7064 2.74643 4.94853 3.34835 4.34661C3.87328 3.82168 4.51835 3.55644 5.27635 3.41721C5.83977 3.31372 6.49963 3.27425 7.26279 3.25871ZM7.26476 4.75913C6.54668 4.77447 5.99332 4.81061 5.54735 4.89253C4.98054 4.99664 4.65246 5.16382 4.40901 5.40727C4.13225 5.68403 3.9518 6.07261 3.85315 6.80638C3.75159 7.56173 3.75 8.56285 3.75 9.99826V15.9983C3.75 17.4337 3.75159 18.4348 3.85315 19.1901C3.9518 19.9239 4.13225 20.3125 4.40901 20.5893C4.68577 20.866 5.07435 21.0465 5.80812 21.1451C6.56347 21.2467 7.56458 21.2483 9 21.2483H15C16.4354 21.2483 17.4365 21.2467 18.1919 21.1451C18.9257 21.0465 19.3142 20.866 19.591 20.5893C19.8678 20.3125 20.0482 19.9239 20.1469 19.1901C20.2484 18.4348 20.25 17.4337 20.25 15.9983V9.99826C20.25 8.56285 20.2484 7.56173 20.1469 6.80638C20.0482 6.07261 19.8678 5.68403 19.591 5.40727C19.3475 5.16382 19.0195 4.99664 18.4527 4.89253C18.0067 4.81061 17.4533 4.77447 16.7352 4.75913C16.6067 5.87972 15.655 6.75 14.5 6.75H9.5C8.345 6.75 7.39326 5.87972 7.26476 4.75913ZM9.5 2.75C9.08579 2.75 8.75 3.08579 8.75 3.5V4.5C8.75 4.91421 9.08579 5.25 9.5 5.25H14.5C14.9142 5.25 15.25 4.91421 15.25 4.5V3.5C15.25 3.08579 14.9142 2.75 14.5 2.75H9.5ZM15.5483 10.4883C15.8309 10.7911 15.8146 11.2657 15.5117 11.5483L11.226 15.5483C10.9379 15.8172 10.4907 15.8172 10.2025 15.5483L8.48826 13.9483C8.18545 13.6657 8.16908 13.1911 8.45171 12.8883C8.73433 12.5854 9.20893 12.5691 9.51174 12.8517L10.7143 13.9741L14.4883 10.4517C14.7911 10.1691 15.2657 10.1854 15.5483 10.4883Z'
											></path>
										</g>
									</svg>
								) : (
									<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
										<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
										<g id='SVGRepo_iconCarrier'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M7.26279 3.25871C7.38317 2.12953 8.33887 1.25 9.5 1.25H14.5C15.6611 1.25 16.6168 2.12953 16.7372 3.25871C17.5004 3.27425 18.1602 3.31372 18.7236 3.41721C19.4816 3.55644 20.1267 3.82168 20.6517 4.34661C21.2536 4.94853 21.5125 5.7064 21.6335 6.60651C21.75 7.47348 21.75 8.5758 21.75 9.94339V16.0531C21.75 17.4207 21.75 18.523 21.6335 19.39C21.5125 20.2901 21.2536 21.048 20.6517 21.6499C20.0497 22.2518 19.2919 22.5107 18.3918 22.6317C17.5248 22.7483 16.4225 22.7483 15.0549 22.7483H8.94513C7.57754 22.7483 6.47522 22.7483 5.60825 22.6317C4.70814 22.5107 3.95027 22.2518 3.34835 21.6499C2.74643 21.048 2.48754 20.2901 2.36652 19.39C2.24996 18.523 2.24998 17.4207 2.25 16.0531V9.94339C2.24998 8.5758 2.24996 7.47348 2.36652 6.60651C2.48754 5.7064 2.74643 4.94853 3.34835 4.34661C3.87328 3.82168 4.51835 3.55644 5.27635 3.41721C5.83977 3.31372 6.49963 3.27425 7.26279 3.25871ZM7.26476 4.75913C6.54668 4.77447 5.99332 4.81061 5.54735 4.89253C4.98054 4.99664 4.65246 5.16382 4.40901 5.40727C4.13225 5.68403 3.9518 6.07261 3.85315 6.80638C3.75159 7.56173 3.75 8.56285 3.75 9.99826V15.9983C3.75 17.4337 3.75159 18.4348 3.85315 19.1901C3.9518 19.9239 4.13225 20.3125 4.40901 20.5893C4.68577 20.866 5.07435 21.0465 5.80812 21.1451C6.56347 21.2467 7.56458 21.2483 9 21.2483H15C16.4354 21.2483 17.4365 21.2467 18.1919 21.1451C18.9257 21.0465 19.3142 20.866 19.591 20.5893C19.8678 20.3125 20.0482 19.9239 20.1469 19.1901C20.2484 18.4348 20.25 17.4337 20.25 15.9983V9.99826C20.25 8.56285 20.2484 7.56173 20.1469 6.80638C20.0482 6.07261 19.8678 5.68403 19.591 5.40727C19.3475 5.16382 19.0195 4.99664 18.4527 4.89253C18.0067 4.81061 17.4533 4.77447 16.7352 4.75913C16.6067 5.87972 15.655 6.75 14.5 6.75H9.5C8.345 6.75 7.39326 5.87972 7.26476 4.75913ZM9.5 2.75C9.08579 2.75 8.75 3.08579 8.75 3.5V4.5C8.75 4.91421 9.08579 5.25 9.5 5.25H14.5C14.9142 5.25 15.25 4.91421 15.25 4.5V3.5C15.25 3.08579 14.9142 2.75 14.5 2.75H9.5ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10L12.75 12.25H15C15.4142 12.25 15.75 12.5858 15.75 13C15.75 13.4142 15.4142 13.75 15 13.75H12.75V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V13.75H9C8.58579 13.75 8.25 13.4142 8.25 13C8.25 12.5858 8.58579 12.25 9 12.25H11.25L11.25 10C11.25 9.58579 11.5858 9.25 12 9.25Z'
											></path>
										</g>
									</svg>
								)}
							</button>
						</div>
						<div className={styles.sub}>
							<h4 className={styles.subtitle}>스트림키</h4>
							<p className={styles.content}>{streamkey}</p>
							<button
								onClick={(e) => {
									// navigator.clipboard.writeText(streamkey);
									const textarea = document.createElement('textarea');
									textarea.value = streamkey;
									document.body.appendChild(textarea);
									textarea.select();
									document.execCommand('copy');
									document.body.removeChild(textarea);
									setisCopied3(true);
								}}
								className={styles.copybtn}
							>
								{isCopied3 ? (
									<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
										<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
										<g id='SVGRepo_iconCarrier'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M7.26279 3.25871C7.38317 2.12953 8.33887 1.25 9.5 1.25H14.5C15.6611 1.25 16.6168 2.12953 16.7372 3.25871C17.5004 3.27425 18.1602 3.31372 18.7236 3.41721C19.4816 3.55644 20.1267 3.82168 20.6517 4.34661C21.2536 4.94853 21.5125 5.7064 21.6335 6.60651C21.75 7.47348 21.75 8.5758 21.75 9.94339V16.0531C21.75 17.4207 21.75 18.523 21.6335 19.39C21.5125 20.2901 21.2536 21.048 20.6517 21.6499C20.0497 22.2518 19.2919 22.5107 18.3918 22.6317C17.5248 22.7483 16.4225 22.7483 15.0549 22.7483H8.94513C7.57754 22.7483 6.47522 22.7483 5.60825 22.6317C4.70814 22.5107 3.95027 22.2518 3.34835 21.6499C2.74643 21.048 2.48754 20.2901 2.36652 19.39C2.24996 18.523 2.24998 17.4207 2.25 16.0531V9.94339C2.24998 8.5758 2.24996 7.47348 2.36652 6.60651C2.48754 5.7064 2.74643 4.94853 3.34835 4.34661C3.87328 3.82168 4.51835 3.55644 5.27635 3.41721C5.83977 3.31372 6.49963 3.27425 7.26279 3.25871ZM7.26476 4.75913C6.54668 4.77447 5.99332 4.81061 5.54735 4.89253C4.98054 4.99664 4.65246 5.16382 4.40901 5.40727C4.13225 5.68403 3.9518 6.07261 3.85315 6.80638C3.75159 7.56173 3.75 8.56285 3.75 9.99826V15.9983C3.75 17.4337 3.75159 18.4348 3.85315 19.1901C3.9518 19.9239 4.13225 20.3125 4.40901 20.5893C4.68577 20.866 5.07435 21.0465 5.80812 21.1451C6.56347 21.2467 7.56458 21.2483 9 21.2483H15C16.4354 21.2483 17.4365 21.2467 18.1919 21.1451C18.9257 21.0465 19.3142 20.866 19.591 20.5893C19.8678 20.3125 20.0482 19.9239 20.1469 19.1901C20.2484 18.4348 20.25 17.4337 20.25 15.9983V9.99826C20.25 8.56285 20.2484 7.56173 20.1469 6.80638C20.0482 6.07261 19.8678 5.68403 19.591 5.40727C19.3475 5.16382 19.0195 4.99664 18.4527 4.89253C18.0067 4.81061 17.4533 4.77447 16.7352 4.75913C16.6067 5.87972 15.655 6.75 14.5 6.75H9.5C8.345 6.75 7.39326 5.87972 7.26476 4.75913ZM9.5 2.75C9.08579 2.75 8.75 3.08579 8.75 3.5V4.5C8.75 4.91421 9.08579 5.25 9.5 5.25H14.5C14.9142 5.25 15.25 4.91421 15.25 4.5V3.5C15.25 3.08579 14.9142 2.75 14.5 2.75H9.5ZM15.5483 10.4883C15.8309 10.7911 15.8146 11.2657 15.5117 11.5483L11.226 15.5483C10.9379 15.8172 10.4907 15.8172 10.2025 15.5483L8.48826 13.9483C8.18545 13.6657 8.16908 13.1911 8.45171 12.8883C8.73433 12.5854 9.20893 12.5691 9.51174 12.8517L10.7143 13.9741L14.4883 10.4517C14.7911 10.1691 15.2657 10.1854 15.5483 10.4883Z'
											></path>
										</g>
									</svg>
								) : (
									<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
										<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
										<g id='SVGRepo_iconCarrier'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M7.26279 3.25871C7.38317 2.12953 8.33887 1.25 9.5 1.25H14.5C15.6611 1.25 16.6168 2.12953 16.7372 3.25871C17.5004 3.27425 18.1602 3.31372 18.7236 3.41721C19.4816 3.55644 20.1267 3.82168 20.6517 4.34661C21.2536 4.94853 21.5125 5.7064 21.6335 6.60651C21.75 7.47348 21.75 8.5758 21.75 9.94339V16.0531C21.75 17.4207 21.75 18.523 21.6335 19.39C21.5125 20.2901 21.2536 21.048 20.6517 21.6499C20.0497 22.2518 19.2919 22.5107 18.3918 22.6317C17.5248 22.7483 16.4225 22.7483 15.0549 22.7483H8.94513C7.57754 22.7483 6.47522 22.7483 5.60825 22.6317C4.70814 22.5107 3.95027 22.2518 3.34835 21.6499C2.74643 21.048 2.48754 20.2901 2.36652 19.39C2.24996 18.523 2.24998 17.4207 2.25 16.0531V9.94339C2.24998 8.5758 2.24996 7.47348 2.36652 6.60651C2.48754 5.7064 2.74643 4.94853 3.34835 4.34661C3.87328 3.82168 4.51835 3.55644 5.27635 3.41721C5.83977 3.31372 6.49963 3.27425 7.26279 3.25871ZM7.26476 4.75913C6.54668 4.77447 5.99332 4.81061 5.54735 4.89253C4.98054 4.99664 4.65246 5.16382 4.40901 5.40727C4.13225 5.68403 3.9518 6.07261 3.85315 6.80638C3.75159 7.56173 3.75 8.56285 3.75 9.99826V15.9983C3.75 17.4337 3.75159 18.4348 3.85315 19.1901C3.9518 19.9239 4.13225 20.3125 4.40901 20.5893C4.68577 20.866 5.07435 21.0465 5.80812 21.1451C6.56347 21.2467 7.56458 21.2483 9 21.2483H15C16.4354 21.2483 17.4365 21.2467 18.1919 21.1451C18.9257 21.0465 19.3142 20.866 19.591 20.5893C19.8678 20.3125 20.0482 19.9239 20.1469 19.1901C20.2484 18.4348 20.25 17.4337 20.25 15.9983V9.99826C20.25 8.56285 20.2484 7.56173 20.1469 6.80638C20.0482 6.07261 19.8678 5.68403 19.591 5.40727C19.3475 5.16382 19.0195 4.99664 18.4527 4.89253C18.0067 4.81061 17.4533 4.77447 16.7352 4.75913C16.6067 5.87972 15.655 6.75 14.5 6.75H9.5C8.345 6.75 7.39326 5.87972 7.26476 4.75913ZM9.5 2.75C9.08579 2.75 8.75 3.08579 8.75 3.5V4.5C8.75 4.91421 9.08579 5.25 9.5 5.25H14.5C14.9142 5.25 15.25 4.91421 15.25 4.5V3.5C15.25 3.08579 14.9142 2.75 14.5 2.75H9.5ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10L12.75 12.25H15C15.4142 12.25 15.75 12.5858 15.75 13C15.75 13.4142 15.4142 13.75 15 13.75H12.75V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V13.75H9C8.58579 13.75 8.25 13.4142 8.25 13C8.25 12.5858 8.58579 12.25 9 12.25H11.25L11.25 10C11.25 9.58579 11.5858 9.25 12 9.25Z'
											></path>
										</g>
									</svg>
								)}
							</button>
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</>
	);
}
