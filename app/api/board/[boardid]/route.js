import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
	console.log('/api/board/{boardid}');
	const resapi = await fetch(`${process.env.MEDIA_API}/api/board/{boardid}`, {
		cache: 'no-store',
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
