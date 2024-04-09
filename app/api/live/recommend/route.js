import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	const resapi = await fetch(`${process.env.MEDIA_API}/api/live/recommend`, { cache: 'no-store', next: { revalidate: 60 } });
	const data = await resapi.json();
	return NextResponse.json({ data }, { status: 200 });
}
