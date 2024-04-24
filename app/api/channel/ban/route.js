import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('api/channel/ban');
	const { channelid, streamkey } = await request.json();
	console.log(channelid);
	console.log(streamkey);
	const resapi = await fetch(`${process.env.MEDIA_API}/api/channel/ban`, {
		method: 'POST',
		body: JSON.stringify({ channelid, streamkey }),
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
