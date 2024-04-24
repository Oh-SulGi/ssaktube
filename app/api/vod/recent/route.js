import { NextRequest, NextResponse } from 'next/server';

/**
 *
 * @param {NextRequest} request
 * @param {*} param1
 * @returns
 */
export async function GET(request, { params }) {
	console.log(`/api/vod/recent`);
	const resapi = await fetch(`${process.env.MEDIA_API}/api/vod/recent`, { cache: 'no-store' });
	const data = await resapi.json();
	console.log(data);

	return NextResponse.json({ data }, { status: resapi.status });
}
export const dynamic = 'force-dynamic';
