'use client';

import { useState } from 'react';
import styles from './morebtn.module.css';

export default function MoreBtnr({ replyid }) {
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
							setisopen((isopen) => !isopen);
							fetch(`/api/reply/${replyid}`, {
								method: 'DELETE',
								cache: 'no-store',
							})
								.then((res) => res.json())
								.then((data) => {
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
