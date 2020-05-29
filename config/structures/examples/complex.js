import { collection, form, timer } from '../../sources';
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
	sources: {
		collection, form, timer,
	},
	structure: {
		items: {
			resetTimerButton,
			addItemForm,
			header,
			updateList,
			displayList,
		},
	},
};

export default dev;
