import { resource as sResource, timer } from '../../sources';
import { resource as cResource } from '../shared/components';

const resource = {
	sources: {
		resource: sResource,
		timer: timer,
	},
	structure: cResource,
};

export default resource;
