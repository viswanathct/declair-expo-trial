import { form, nested as sNested } from '../../sources';
import { nestedForm, nestedDisplay } from '../../structures';

const nested = {
	sources: {
		form: form,
		nested: sNested,
	},
	structure: {
		items: {
			nestedForm,
			nestedDisplay,
		},
	},
};

export default nested;
