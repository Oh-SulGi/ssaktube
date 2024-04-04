import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	const resapi = await fetch(`${process.env.MEDIA_API}/api/live/${params.id}`, { cache: 'no-cache' });
	const data = await resapi.json();
	return NextResponse.json({ data }, { status: 200 });
}