import styles from './page.module.css';

export default function Page() {
	return (
		<>
			<div className={styles.main}>
				<div className={styles.label}>
					<h2>전체 다시보기</h2>
					<div>
						<button>인기순</button>
						<button>최신순</button>
					</div>
				</div>
				<div>
					<div>
						<div>스트리머 섹션</div>
						<div>비디오섹션</div>
					</div>
				</div>
			</div>
		</>
	);
}
