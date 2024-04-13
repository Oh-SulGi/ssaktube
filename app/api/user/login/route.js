import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request, { params }) {
	const body = await request.json();
	const { email, password } = body;
	const resapi = await fetch(`${process.env.USER_API}/api/user/login`, {
		method: 'POST',
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});
	const data = await resapi.json();
	console.log(`/api/user/login`);
	console.log(body);
	console.log(resapi.status);
	console.log(data);
	/**
	 * @type {NextResponse}
	 */
	const response = NextResponse.json({ process: 'done' }, { status: resapi.status });
	response.cookies.set('id_token', data.id_token, { maxAge: 3 * 60 * 60 });
	response.cookies.set('access_token', data.access_token, { maxAge: 3 * 60 * 60 });
	// response.cookies.set('userid', data.userid);
	// response.cookies.set('user_logo', `streamer-userlogo.s3.ap-northeast-1.amazonaws.com/${data.userid}.jpg`);
	return response;
}
export const dynamic = 'force-dynamic';
