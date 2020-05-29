import { int, standardizeResponse, status } from './shared';

/* Helpers */
const errorFrequency = 3;

/* Exports */
const simple = {
	get: standardizeResponse(({ parsed }) => {
		const isSuccess = int(parsed.query.timer) % errorFrequency;

		return {
			status: isSuccess
				? status.success
				: status.error,
			body: {
				message: isSuccess
					? `Request #${ parsed.query.timer } @ ${ new Date().toISOString() }`
					: 'Unknown error!',
			},
		};
	}),
};

export default simple;
