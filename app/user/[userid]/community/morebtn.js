'use client';

import { useState } from 'react';
import styles from './morebtn.module.css';

export default function MoreBtn({ boardid }) {
	const [isopen, setisopen] = useState(false);
	return (
		<div className={styles.moreWrapper}>
			<button
				className={styles.more}
				onClick={(e) => {
					setisopen((isopen) => !isopen);
				}}
			>
				더보기
			</button>
			{isopen ? (
				<ul>
					<li
						className={styles.moreAction}
						onClick={(e) => {
							fetch(`/api/board/${boardid}`, {
								method: 'DELETE',
								cache: 'no-store',
							})
								.then((res) => res.json())
								.then((data) => {
									setisopen((isopen) => !isopen);
									alert('삭제 완료되었습니다.');
									console.log(data);
									window.location.reload();
								});
						}}
					>
						삭제
					</li>
				</ul>
			) : (
				''
			)}
		</div>
	);
}
