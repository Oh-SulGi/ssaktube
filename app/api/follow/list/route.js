import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('/api/follow/list');
	const cookiestore = cookies();
	const id_token = cookiestore.get('id_token')?.value;
	const access_token = cookiestore.get('access_token')?.value;
	const { userid } = await request.json();

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
