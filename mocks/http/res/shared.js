const { stringify } = JSON;

import { fill } from '@laufire/utils/collection';

const defaults = {
	status: 200,
};

const responseProcessors = {
	string: (res) => ({
		body: stringify(res),
	}),
	object: (res) => ({
		...res,
		body: stringify(res.body),
	}),
};

const standardizeResponse = (cb) => (...args) => {
	const res = cb(...args);
	const type = typeof res;

	return fill(responseProcessors[type](res), defaults);
};

export {
	standardizeResponse,
};
