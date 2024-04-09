import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	const resapi = await fetch(`${process.env.MEDIA_API}/api/live`, { cache: 'no-cache' });
	const data = await resapi.json();
	console.log(`/api/live`);
	console.log(data);
	return NextResponse.json({ data }, { status: 200 });
}

export const dynamic = 'force-dynamic';
