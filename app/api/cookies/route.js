import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
	console.log(`/api/cookies`);
	/**
	 * @type {{list:[String]}}
	 */
	const body = await request.json();
	const { list } = body;
	const cookestore = cookies();
	list.forEach((string) => {
		cookestore.delete(string);
		console.log('cookie', string, 'deleted');
	});

	return NextResponse.json({ 작업: 'done' }, { status: 200 });
}

export const dynamic = 'force-dynamic';
