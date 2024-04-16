import { NextResponse } from 'next/server';
import { S3Client } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { cookies } from 'next/headers';

export async function POST(request, { params }) {
	console.log('/api/s3/video');
	console.log(process.env.AWS_REGION);
	console.log(process.env.AWS_IDENTITY_POOL);
	console.log(process.env.AWS_USER_POOL_ID);
	console.log(process.env.AWS_VOD_BUCKET);
	const cookiestore = cookies();
	const id_token = cookiestore.get('id_token')?.value;
	const access_token = cookiestore.get('access_token')?.value;
	const { userid, filename, contentType } = await request.json();
	console.log(contentType);
	try {
		const client = new S3Client({
			region: process.env.AWS_REGION,
			credentials: fromCognitoIdentityPool({
				clientConfig: { region: process.env.AWS_REGION },
				identityPoolId: process.env.AWS_IDENTITY_POOL,
				logins: {
					[`cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_USER_POOL_ID}`]: id_token,
				},
			}),
		});
		const time = new Date().getTime();
		console.log(time);
		console.log(`row_vod/${userid}/${time}/${filename}.mp4`);
		const { url, fields } = await createPresignedPost(client, {
			Bucket: process.env.AWS_VOD_BUCKET,
			Key: `raw_vod/${userid}/${time}/${filename}.mp4`,
			Expires: 3 * 60 * 60,
			Fields: {
				'Content-type': contentType,
			},
			Conditions: [
				['content-length-range', 0, 1048576000], // up to 1000 MB
			],
		});
		console.log(url);
		console.log(fields);
		const response = NextResponse.json({ url, fields }, { status: 200 });
		return response;
	} catch (error) {
		console.log(error);
		const response = NextResponse.json({ error }, { status: 500 });
		return response;
	}
}
export const dynamic = 'force-dynamic';
