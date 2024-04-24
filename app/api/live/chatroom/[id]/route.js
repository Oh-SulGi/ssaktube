import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	console.log(`/api/live/chatroom/${params.id}`);
	const resapi = await fetch(`${process.env.MEDIA_API}/api/live/chatroom/${params.id}`, { cache: 'no-store' });
	const data = await resapi.json();
	console.log(resapi.status);
	console.log(data);
	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
