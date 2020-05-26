import { standardizeResponse } from './shared';

const simple = {
	get: standardizeResponse(({ params }) =>
		`Request #${ params.timer } @ ${ new Date().toISOString() }`),
};

export default simple;
