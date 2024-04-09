import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

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
		credentials: 'include',
	});
	const cookieStore = cookies();
	const fcookie = resapi.headers.get('set-cookie');
	console.log(fcookie);
	const data = await resapi.json();
	console.log(data);

	const response = NextResponse.json({ ...data }, { status: 200 });
	return response;
}
export const dynamic = 'force-dynamic';
