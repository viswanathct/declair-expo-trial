import { collection, form, timer } from '../../sources';
import { addItemForm, displayList,
	resetTimerButton, updateList } from '../../structures';

const header = {
	type: 'text',
	data: 'The lists below are synced. '
		+ 'Edit or remove items for the lists.',
	style: {
		marginTop: 20,
	},
};

const complex = {
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

export default complex;
