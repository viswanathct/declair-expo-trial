import { colors } from './shared';
import { peek } from '@laufire/utils/debug';

/* Exports */
const timer = {
	type: 'value',
	data: 0,
};

const style = {
	type: 'value',
	data: {
		color: 'timer',
	},
};

const currentTime = {
	type: 'transformation',
	data: 'timer',
	transform: () => new Date().toISOString(),
};

const buffer = {
	type: 'value',
	data: {
		color: '1',
	},
};

const debug = {
	type: 'transformation',
	data: 'buffer',
	transform: peek,
};

const cachedTime = {
	type: 'transformation',
	data: 'timer',
	transform: (() => {
		const cache = { ret: 'Cache empty!' };

		return () => {
			const { ret } = cache;

			cache.ret = new Date().toISOString();

			return ret;
		};
	})(),
};

const color = {
	type: 'transformation',
	data: 'style',
	transform: ({ color: val }) => colors[val % colors.length],
};

const form = {
	type: 'value',
	data: {
		color: '0',
	},
};

const borderColor = {
	type: 'transformation',
	data: 'form',
	transform: ({ color: val }) => colors[parseInt(val, 10) % colors.length],
};

const input = {
	type: 'value',
	data: 'red',
};

const collection = {
	type: 'collection',
	data: [
		{ color: 1 },
		{ color: 2 },
		{ color: 3 },
	],
};

const proxy = {
	type: 'collection',
	data: 'collection',
};

const nested = {
	type: 'value',
	data: {
		sub: {
			color: '1',
		},
	},
};

const resource = {
	type: 'resource',
	url: 'http://test/simple',
	params: {
		timer: 'timer',
	},
};

const branch = {
	type: 'branch',
	data: 'resource',
	branch: 'error',
};

export {
	timer,
	style,
	currentTime,
	buffer,
	debug,
	cachedTime,
	color,
	form,
	borderColor,
	input,
	collection,
	proxy,
	nested,
	resource,
	branch,
};
