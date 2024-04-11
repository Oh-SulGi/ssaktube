import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request, { params }) {
	const cookestore = cookies();
	const id_token = cookestore.get('id_token').value;
	const access_token = cookestore.get('access_token').value;
	const userid = cookestore.get('userid').value;

	console.log({ id_token, userid });
	const resapi = await fetch(`${process.env.USER_API}/api/user/properties/detail`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify({ id_token, userid }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await resapi.json();
	console.log(`/api/properties/detail`);
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
