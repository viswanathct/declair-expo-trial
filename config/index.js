import sources from './sources';
import structures from './structures';

const config = (type = 'dev') => ({
	types: {
		element: {
			style: {
				backgroundColor: '#ddd',
				borderWidth: 1,
			},
		},
		text: {
			style: {
				fontSize: 12,
			},
		},
	},
	sources: sources,
	structure: structures[type],
});

export default config;
