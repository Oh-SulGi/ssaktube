import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
	const cookestore = cookies();
	const id_token = cookestore.get('id_token');
	const access_token = cookestore.get('access_token');
	const userid = cookestore.get('userid');
	const resapi = await fetch(`${process.env.MEDIA_API}/api/channel`, { body: JSON.stringify({ id_token, access_token, userid }), cache: 'no-store' });
	const data = await resapi.json();
	console.log(`/api/channel`);
	console.log(data);
	return NextResponse.json({ data }, { status: resapi.status });
}

export const dynamic = 'force-dynamic';