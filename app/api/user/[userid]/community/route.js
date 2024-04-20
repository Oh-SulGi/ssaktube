import { NextRequest, NextResponse } from 'next/server';

export async function POST(request, { params }) {
	console.log('/api/user/[userid]/community');
	const userid = params.userid;
	console.log(userid);
	const { searchParams } = new URL(request.url);
	const sort = searchParams.get('sort') || 'latest';
	const page = searchParams.get('page') || 1;
	console.log(sort);
	console.log(page);
	const resapi = await fetch(`${process.env.MEDIA_API}/api/user/${userid}/community?sort=${sort}&page=${page}`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify({ userid }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
