import { standardizeResponse } from './shared';

const simple = {
	get: standardizeResponse(({ params }) => ({
		status: parseInt(params.timer, 10) % 3 ? 200 : 500, // eslint-disable-line no-magic-numbers
		body: `Request #${ params.timer } @ ${ new Date().toISOString() }`,
	})),
};

export default simple;
