import { collection, color, form, input, style, timer } from '../../sources';
import { child } from '../shared/parts';

const nested = {
	sources: {
		collection, color, form, input, style, timer,
	},
	structure: {
		style: {
			borderColor: 'black',
			flex: 1,
			flexDirection: 'column',
			width: '100%',
		},
		items: {
			child,
		},
	},
};

export default nested;
