import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	const resapi = await fetch(`${process.env.MEDIA_API2}/api/live/chatroom/${params.id}`, { cache: 'no-store' });
	const data = await resapi.json();
	console.log(`/api/live/chatroom/${params.id}`);
	console.log(data);
	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
