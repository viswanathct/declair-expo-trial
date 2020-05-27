import { int, standardizeResponse, status } from './shared';

/* Helpers */
const errorFrequency = 3;

/* Exports */
const simple = {
	get: standardizeResponse(({ parsed }) => ({
		status: int(parsed.query.timer) % errorFrequency
			? status.success
			: status.error,
		body: `Request #${ parsed.query.timer } @ ${ new Date().toISOString() }`,
	})),
};

export default simple;
