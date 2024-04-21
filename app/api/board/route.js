import { NextRequest, NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('/api/board');
	const { content, authorid } = await request.json();
	const resapi = await fetch(`${process.env.MEDIA_API}/api/board`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify({ authorid, content }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
