export default function Page({ data }) {
	console.log(data);
	return (
		<>
			<div>{data}</div>
		</>
	);
}

export async function generateStaticParams() {
	const posts = await fetch('https://.../api/lives').then((res) => res.json());

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
