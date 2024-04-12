import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('/api/user/properties/change_streamname');
	const { nstreamname } = await request.json();
	const cookestore = cookies();
	const id_token = cookestore.get('id_token')?.value;
	const access_token = cookestore.get('access_token')?.value;
	const resapi = await fetch(`${process.env.USER_API}/api/user/properties/change_streamname`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify({ id_token, access_token, new_streamname: nstreamname }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
