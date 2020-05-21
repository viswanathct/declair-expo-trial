import { child } from '../shared/parts';

const nested = {
	data: {
		message: 'Some text passed as data from the parent!',
	},
	style: {
		borderColor: 'black',
		flex: 1,
		flexDirection: 'column',
		width: '100%',
	},
	items: {
		child,
	},
};

export default nested;
