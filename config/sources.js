import { colors } from './shared';
import { peek } from '@laufire/utils/debug';

/* Exports */
const sources = {
	timer: {
		type: 'value',
		data: 0,
	},
	style: {
		type: 'value',
		data: {
			color: 'timer',
		},
	},
	currentTime: {
		type: 'transformation',
		data: 'timer',
		transform: () => new Date().toISOString(),
	},
	buffer: {
		type: 'value',
		data: {
			color: '1',
		},
	},
	debug: {
		type: 'transformation',
		data: 'buffer',
		transform: peek,
	},
	cachedTime: {
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
	},
	color: {
		type: 'transformation',
		data: 'style',
		transform: ({ color }) => colors[color % colors.length],
	},
	form: {
		type: 'value',
		data: {
			color: '0',
		},
	},
	borderColor: {
		type: 'transformation',
		data: 'form',
		transform: ({ color }) => colors[parseInt(color, 10) % colors.length],
	},
	input: {
		type: 'value',
		data: 'red',
	},
	collection: {
		type: 'collection',
		data: [
			{ color: 1 },
			{ color: 2 },
			{ color: 3 },
		],
	},
	proxy: {
		type: 'collection',
		data: 'collection',
	},
	nested: {
		type: 'value',
		data: {
			sub: {
				color: '1',
			},
		},
	},
	resource: {
		type: 'resource',
		url: 'http://test/simple',
	},
};

export default sources;
