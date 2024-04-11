import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request, { params }) {
	console.log(`/api/user/logout`);
	const response = NextResponse.json({ process: 'done' }, { status: 200 });
	response.cookies.delete('id_token');
	response.cookies.delete('access_token');
	response.cookies.delete('userid');
	response.cookies.delete('user_logo');
	return response;
}
export const dynamic = 'force-dynamic';
