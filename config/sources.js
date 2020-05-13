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
};

export default sources;
