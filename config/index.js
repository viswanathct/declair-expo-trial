import { map, result, traverse } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

import examples from './examples';
import types from './types';

/* Helpers */
const getRndModuleId = () => {
	const moduleList = [];

	traverse(map(examples, (base, baseName) =>
		map(base, (dummy, itemName) =>
			`${ baseName }/${ itemName }`)), (path) => moduleList.push(path));

	return rndValue(moduleList);
};

/* Exports */
const config = (passedExampleID) => {
	const exampleID = passedExampleID || getRndModuleId();
	const example = result(examples, exampleID);
	const app = { types, ...example };

	return { exampleID, app };
};

export default config;
