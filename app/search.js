'use client';
import { useState } from 'react';
import styles from './search.module.css';
import Link from 'next/link';

export default function Search() {
	const [result, setresult] = useState([]);
	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<input
					className={styles.input}
					onChange={(e) => {
						console.log(e.target.value.length);
						if (e.target.value.length !== 0) {
							fetch('/api/meili', {
								method: 'POST',
								body: JSON.stringify({
									q: e.target.value,
									index: 'user',
								}),
							})
								.then((res) => res.json())
								.then((data) => {
									console.log(result);
									if (e.target.value.length !== 0) {
										setresult(data);
									}
								});
						} else {
							setresult([]);
						}
					}}
				></input>
				<button type='submit' className={styles.submit}>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g opacity='0.9'>
							<path d='M15.8999 14.5L19.0862 17.7187' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'></path>
							<circle cx='11.4302' cy='10.4819' r='5.35' stroke='currentColor' strokeWidth='1.8'></circle>
						</g>
					</svg>
				</button>
			</div>
			<div className={styles.results}>
				{result.map((r, index) => (
					<Link
						className={styles.result}
						href={`/user/${r.userid}`}
						key={index}
						onClick={(e) => {
							setresult([]);
						}}
					>
						<svg width='17' height='17' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' class='search_icon_search__to+rz'>
							<path
								d='M12.925 11.875L15.3148 14.2891'
								stroke='currentColor'
								strokeWidth='1.8'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
							<circle cx='9.57251' cy='8.86157' r='3.7875' stroke='currentColor' strokeWidth='1.8'></circle>
						</svg>
						<span>{r.username}</span>
					</Link>
				))}
				{/* <a className={styles.result} href='/'>
					<svg width='17' height='17' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' class='search_icon_search__to+rz'>
						<path d='M12.925 11.875L15.3148 14.2891' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'></path>
						<circle cx='9.57251' cy='8.86157' r='3.7875' stroke='currentColor' strokeWidth='1.8'></circle>
					</svg>
					<span>가나다라</span>
				</a>
				<a className={styles.result} href='/'>
					<svg width='17' height='17' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' class='search_icon_search__to+rz'>
						<path d='M12.925 11.875L15.3148 14.2891' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'></path>
						<circle cx='9.57251' cy='8.86157' r='3.7875' stroke='currentColor' strokeWidth='1.8'></circle>
					</svg>
					<span>abcd</span>
				</a> */}
			</div>
		</div>
	);
}
