'use client';

import styles from './followBtn.module.css';

export default function SortBtn({ onclickFunction, textValue }) {
	return <button onClick={onclickFunction}>{textValue}</button>;
}
