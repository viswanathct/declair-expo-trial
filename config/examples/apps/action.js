import { collection, timer } from '../../sources';
import { displayList } from '../../structures';

const action = {
	sources: {
		collection, timer,
	},
	structure: {
		items: {
			addItem: {
				type: 'button',
				label: 'Add Item',
				action: 'create',
				target: 'collection',
				data: {
					color: 'timer',
				},
			},
			description: {
				type: 'text',
				data: 'Value to add:',
			},
			item: {
				type: 'text',
				data: 'timer',
			},
			displayList: displayList,
		},
	},
};

export default action;
