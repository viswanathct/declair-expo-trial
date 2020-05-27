import { result } from '@laufire/utils/collection';
import parseURL from 'url-parse';
import { sleep } from '@laufire/utils/debug';

/* Data */
const defaults = {
	opts: {
		method: 'GET',
	},
	mockOpts: {
		delay: 0,
	},
};

/* Helpers */
const match = (matcher) =>
	(string) => !string.search(matcher);

const response = async (data, mockOptions) => {
	await sleep(mockOptions.delay);

	return {
		status: data.status,
		json: async () => JSON.parse(data.body), // eslint-disable-line require-await
	};
};

const mockedFetch = (mockers, mockOptions = defaults.mockOpts) =>
	(url, opts = defaults.opts) => {
		const parsed = parseURL(url, true);
		const path = parsed.pathname.replace('^/', '');
		const method = opts.method.toLowerCase();
		const mockPath = `${ path }/${ method }`;

		return response(result(mockers, mockPath)({
			url, opts, parsed,
		}), mockOptions);
	};

const mock = (
	baseURL, mockers, mockOptions
) => {
	const matcher = match(baseURL);
	const { fetch } = window;
	const mocked = mockedFetch(mockers, mockOptions);

	window.fetch = (url, ...rest) => {
		if(matcher(url))
			return mocked(url, ...rest);

		return fetch(url, ...rest);
	};
};

export default mock;
