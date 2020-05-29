import { resource as sResource, timer } from '../../sources';
import { resource as cResource } from '../../structures';

const resource = {
	sources: {
		resource: sResource,
		timer: timer,
	},
	structure: cResource,
};

export default resource;
