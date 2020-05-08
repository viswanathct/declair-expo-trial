import { colors } from './shared';

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
	color: {
		type: 'transformation',
		data: 'style',
		transform: ({ color }) => colors[color % colors.length],
	},
	input: {
		type: 'value',
		data: 'red',
	},
	collection: {
		type: 'collection',
		data: [
			{ sub: 1 },
			{ sub: 2 },
			{ sub: 3 },
		],
	},
};

export default sources;
