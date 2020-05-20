import { map, traverse, result } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import { peek } from '@laufire/utils/debug';

import sources from './sources';
import structures from './structures';

/* Helpers */
const getRndModuleId = () => {
	const moduleList = [];

	traverse(map(structures, (base, baseName) =>
		map(base, (dummy, itemName) =>
			`${ baseName }/${ itemName }`)), (path) => moduleList.push(path));

	return rndValue(moduleList);
};

const getModule = (moduleId) =>
	result(structures, peek(moduleId || getRndModuleId()));

/* Exports */
const config = (moduleId) => ({
	types: {
		element: {
			style: {
				backgroundColor: '#ddd',
				borderWidth: 1,
			},
		},
		text: {
			style: {
				fontSize: 12,
			},
		},
	},
	sources: sources,
	structure: getModule(moduleId),
});

export default config;
