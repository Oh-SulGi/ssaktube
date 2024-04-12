import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('/api/user/properties');
	const { id_token, access_token } = await request.json();
	console.log({ id_token, access_token });
	const resapi = await fetch(`${process.env.USER_API}/api/user/properties`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify({ id_token, access_token }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
