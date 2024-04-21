import { NextRequest, NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('/api/community/{boardid}');
	const resapi = await fetch(`${process.env.MEDIA_API}/api/community/${params.boardid}`, {
		cache: 'no-store',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
