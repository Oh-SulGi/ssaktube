import { NextRequest, NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('/api/video/[idx]');
	const idx = params.idx;
	console.log(idx);
	const resapi = await fetch(`${process.env.MEDIA_API}/api/video/${idx}`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify({ userid }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
