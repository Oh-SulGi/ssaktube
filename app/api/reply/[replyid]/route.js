import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
	console.log('/api/reply/{replyid}');
	const resapi = await fetch(`${process.env.MEDIA_API}/api/reply/${params.replyid}`, {
		cache: 'no-store',
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	console.log(resapi);
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
