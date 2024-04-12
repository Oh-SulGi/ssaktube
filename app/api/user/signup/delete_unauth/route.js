import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log(`/api/user/signup/delete_unauth`);
	const body = await request.json();
	const { email } = body;
	console.log(email);
	const resapi = await fetch(`${process.env.USER_API}/api/user/signup/delete_unauth`, {
		method: 'POST',
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
		}),
	});
	const data = await resapi.json();
	console.log(resapi.status);
	console.log(data);
	return NextResponse.json({ ...data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
