import styles from './sidebar.module.css';

export default function Sidebar({ children }) {
	return (
		<div className={styles.sidebar}>
			<button className={styles.togglebtn}>
				<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' class='header_icon__8SHkt'>
					<g clip-path='url(#clip0_1128_3162)'>
						<rect x='11' y='13' width='18' height='2' rx='1' fill='currentColor'></rect>
						<rect x='11' y='19' width='18' height='2' rx='1' fill='currentColor'></rect>
						<rect x='11' y='25' width='18' height='2' rx='1' fill='currentColor'></rect>
					</g>
				</svg>
			</button>
			<div className={styles.nav}>
				<div className={styles.type}>
					<ul>
						<li>라이브</li>
						<li>다시보기,VOD</li>
						<li>카테고리</li>
					</ul>
				</div>
				<hr />
				<div className={styles.channels}>
					<div className={styles.channelsTitle}>
						<label>추천채널</label>
						<div>
							<button>새로고침</button>
							<button>축소확대</button>
						</div>
					</div>
					<div className={styles.streamers}>
						<div className={styles.streamer}>
							<image></image>
							<div>
								<p>스트리머이름</p>
								<p>방송제목</p>
							</div>
							<span>시청자수</span>
						</div>
					</div>
				</div>
				<hr />
				<div>탐색</div>
			</div>
		</div>
	);
}
