import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
	const body = await request.json();
	const { email, code } = body;
	const resapi = await fetch(`${process.env.USER_API}/api/user/signup/email_authentication`, {
		method: 'POST',
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			code,
		}),
	});
	const data = await resapi.json();
	console.log(body);
	console.log(resapi.status);
	console.log(data);

	const response = NextResponse.json({ ...data }, { status: resapi.status });
	return response;
}
export const dynamic = 'force-dynamic';
