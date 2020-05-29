import { map, result, traverse } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

import structures from './structures';
import types from './types';

/* Helpers */
const getRndModuleId = () => {
	const moduleList = [];

	traverse(map(structures, (base, baseName) =>
		map(base, (dummy, itemName) =>
			`${ baseName }/${ itemName }`)), (path) => moduleList.push(path));

	return rndValue(moduleList);
};

/* Exports */
const config = (passedStructureID) => {
	const structureID = passedStructureID || getRndModuleId();
	const structure = result(structures, structureID);
	const app = { types, ...structure };

	return { structureID, app };
};

export default config;
