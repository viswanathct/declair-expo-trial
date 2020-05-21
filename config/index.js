import { has, keys, map, result,
	select, traverse } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import { peek } from '@laufire/utils/debug';

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

const getStructure = (moduleId) =>
	result(structures, peek(moduleId || getRndModuleId()));

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
const config = (structureID) => {
	const structure = getStructure(structureID);
	const sources = filterSources(allSources, structure);

	return { types, sources, structure };
};

export default config;
