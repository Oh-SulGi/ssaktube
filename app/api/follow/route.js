import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('/api/follow');
	const { userid, target_userid } = await request.json();
	console.log(userid);
	console.log(target_userid);
	const resapi = await fetch(`${process.env.MEDIA_API}/api/follow`, {
		method: 'POST',
		body: JSON.stringify({ userid, target_userid }),
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
