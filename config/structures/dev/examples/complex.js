import { addItemForm, displayList,
	resetTimerButton, updateList } from '../shared/components';

const header = {
	type: 'text',
	data: 'The lists below are synced. '
		+ 'Edit or remove items for the lists.',
	style: {
		marginTop: 20,
	},
};

const dev = {
	items: {
		resetTimerButton,
		addItemForm,
		header,
		updateList,
		displayList,
	},
};

export default dev;
