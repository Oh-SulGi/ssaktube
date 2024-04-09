import { SWRConfig } from 'swr';

function SWRC({ children }) {
	return <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>;
}

export default SWRC;
