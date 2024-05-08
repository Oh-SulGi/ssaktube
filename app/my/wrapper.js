'use client';
import Profile from './profile';
import Stream from './stream';
export default function Wrapper({ children }) {
	return (
		<>
			<Profile username={'샘플 스트리머 이름'} myinfo_={'샘플 자기소개란'} />
			<Stream
				channelid={'sample'}
				userid={'sample'}
				ischannel={1}
				ingestendpoint={'샘플수집서버주소'}
				streamkey={'샘플스트림키'}
				streamname={'샘플 방송제목'}
				isstream={1}
				category={'Game'}
			/>
		</>
	);
}
