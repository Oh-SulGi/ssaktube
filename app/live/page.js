export default async function Page() {
	const res = await fetchback();
	const data = await res.json();
	return (
		<>
			<div>{data.data}</div>
		</>
	);
}
async function fetchback() {
	const res = await fetch('http://localhost:3000/api/lives?page=1', { cache: 'no-store' });
	console.log(res);
	return res;
}
