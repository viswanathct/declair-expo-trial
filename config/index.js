import { has, keys, map, result,
	select, traverse } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

import allSources from './sources';
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

const filterSources = (sources, structure) => {
	const sourceNames = keys(sources);
	const dependencies = [];
	const propsToCheck = ['data', 'target'];
	const pickDependency = (value, key) => { // eslint-disable-line complexity
		typeof value === 'string'
			&& has(sourceNames, value)
			&& !has(dependencies, value)
			&& has(propsToCheck, key)
			&& dependencies.push(value);
	};

	traverse(structure, pickDependency);
	traverse(select(sources, dependencies), pickDependency);

	return select(sources, dependencies);
};

/* Exports */
const config = (passedStructureID) => {
	const structureID = passedStructureID || getRndModuleId();
	const structure = result(structures, structureID);
	const sources = filterSources(allSources, structure);

	const app = { types, sources, structure };

	return { structureID, app };
};

export default config;
