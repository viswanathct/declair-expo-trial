import { branch as sBranch, resource as sResource, timer } from '../../sources';
import { resource as cResource } from '../shared/components';

const app = {
	sources: {
		branch: sBranch,
		resource: sResource,
		timer: timer,
	},
	structure: {
		items: {
			resource: cResource,
			error: {
				data: 'branch',
				style: {
					backgroundColor: 'red',
				},
				items: {
					message: {
						type: 'text',
						style: {
							color: 'white',
						},
					},
				},
			},
		},
	},
};

export default app;
