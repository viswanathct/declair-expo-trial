import { form, collection, input } from '../../sources';
import { addItemForm, displayList } from '../shared/components';

const withAction = {
	sources: {
		form, collection, input,
	},
	structure: {
		items: {
			addItemForm,
			displayList,
		},
	},
};

export default withAction;
