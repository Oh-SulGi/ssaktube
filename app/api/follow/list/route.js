import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('/api/follow/list');
	const cookiestore = cookies();
	const id_token = cookiestore.get('id_token')?.value;
	console.log(id_token);
	const access_token = cookiestore.get('access_token')?.value;
	console.log(access_token);
	const resapi1 = await fetch(`${process.env.USER_API}/api/user/properties/current_user`, {
		method: 'POST',
		body: JSON.stringify({ id_token, access_token }),
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-store',
	});
	const data1 = await resapi1.json();
	console.log(data1);
	const userid = data1.userid;
	const username = data1.username;

	const resapi2 = await fetch(`${process.env.MEDIA_API}/api/follow/list`, {
		method: 'POST',
		body: JSON.stringify({ userid }),
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-store',
	});
	const data2 = await resapi2.json();
	console.log(data2);
	return NextResponse.json({ data: data2 }, { status: resapi2.status });
}

export const dynamic = 'force-dynamic';
