import fetchMock from 'fetch-mock';
import { result } from '@laufire/utils/collection';

/* Data */
const defaultOpts = {
	method: 'GET',
};

/* Helpers */
const match = (matcher) =>
	(string) => !string.search(matcher);

const getParams = (url) => {
	const params = {};

	url.searchParams.forEach((value, key) => (params[key] = value));

	return params;
};

const mock = (baseURL, mockers) =>
	fetchMock.mock(match(baseURL), (urlString, opts = defaultOpts) => {
		const url = new URL(urlString);
		const params = getParams(url);
		const path = url.pathname.replace('^/', '');
		const method = opts.method.toLowerCase();
		const mockPath = `${ path }/${ method }`;

		return result(mockers, mockPath)({
			opts, params, url,
		});
	});

export default mock;
