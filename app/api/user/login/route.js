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
	console.log(data);
	return NextResponse.json({ ...data }, { status: 200 });
}
export const dynamic = 'force-dynamic';
