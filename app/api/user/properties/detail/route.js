import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log(`/api/properties/detail`);
	const cookestore = cookies();
	const id_token = cookestore.get('id_token')?.value;
	const access_token = cookestore.get('access_token')?.value;

	console.log({ id_token, access_token });
	const resapi = await fetch(`${process.env.USER_API}/api/user/properties/detail`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify({ id_token, access_token }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	console.log(resapi.status);
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
