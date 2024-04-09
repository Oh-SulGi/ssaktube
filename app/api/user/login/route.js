import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request, { params }) {
	const body = await request.json();
	const { email, password } = body;
	const resapi = await fetch(`${process.env.USER_API}/api/user/login`, {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});
	const data = await resapi.json();
	// cookies().set('user_id', 'tlqkf2');
	return NextResponse.json({ ...data }, { status: 200 });
}
