import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	const resapi = await fetch(`${process.env.MEDIA_API2}/api/live/chatroom/${params.id}`, { next: { revalidate: 0 } });
	const data = await resapi.json();
	return NextResponse.json({ data }, { status: 200 });
}
