import { standardizeResponse } from './shared';

const simple = {
	get: standardizeResponse(() => `Server time: ${ new Date().toISOString() }`),
};

export default simple;
