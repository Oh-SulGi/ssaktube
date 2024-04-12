import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
	console.log('api/channel');
	const cookiestore = cookies();
	const id_token = cookiestore.get('id_token')?.value;
	console.log(id_token);
	const { userid } = await request.json();
	console.log(userid);
	const access_token = cookiestore.get('access_token');
	const resapi = await fetch(`${process.env.MEDIA_API}/api/channel`, {
		method: 'PUT',
		body: JSON.stringify({ userid, id_token }),
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-store',
	});
	const data = await resapi.json();

	console.log(data);
	return NextResponse.json({ data }, { status: resapi.status });
}

export const dynamic = 'force-dynamic';
