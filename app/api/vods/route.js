import { NextRequest, NextResponse } from 'next/server';

/**
 *
 * @param {NextRequest} request
 * @param {*} param1
 * @returns
 */
export async function GET(request, { params }) {
	const page = request.nextUrl.searchParams.get('page') || 1;
	const sort = request.nextUrl.searchParams.get('sort') || 'popular';
	const resapi = await fetch(`${process.env.MEDIA_API}/api/vods?sort=${sort}&page=${page}`, { cache: 'no-store' });
	const data = await resapi.json();
	console.log(`/api/vods?sort=${sort}&page=${page}`);
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
