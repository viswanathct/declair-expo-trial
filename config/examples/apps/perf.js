import { resetTimerButton } from '../../structures';

const perf = {
	items: {
		resetTimerButton: resetTimerButton,
		input: {
			type: 'input',
			data: 'timer',
		},
		currentTime: {
			type: 'input',
			data: 'currentTime',
		},
		dynamic: {
			items: {},
		},
		cachedTime: {
			type: 'input',
			data: 'cache',
		},
		display: {
			type: 'input',
			data: 'color',
		},
	},
};

const state = { i: 0 };

while(state.i < 1000) { // eslint-disable-line no-magic-numbers
	perf.items.dynamic.items[`child${ ++state.i }`] = {
		type: 'text',
		data: state.i,
	};
}

export default perf;
