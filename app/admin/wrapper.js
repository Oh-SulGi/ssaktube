'use client';

import useSWR from 'swr';
import Censor from './censor';
import Ban from './ban';

export default function Wrapper({ children }) {
	return (
		<>
			<div>관리자가 아닙니다.</div>;
		</>
	);
}
