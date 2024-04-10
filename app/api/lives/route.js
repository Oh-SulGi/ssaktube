import { NextRequest, NextResponse } from 'next/server';

/**
 *
 * @param {NextRequest} request
 * @param {*} param1
 * @returns
 */
export async function GET(request, { params, searchParams }) {
	const page = request.nextUrl.searchParams.get('page') || 1;
	const resapi = await fetch(`${process.env.MEDIA_API}/api/lives?page=${page}`, { cache: 'no-store' });
	const data = await resapi.json();
	console.log(`/api/lives?page=${page}`);
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
