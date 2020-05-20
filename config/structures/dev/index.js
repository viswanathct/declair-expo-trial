import { map, traverse, result } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import { peek } from '@laufire/utils/debug';

import components from './components';
import element from './element';
import form from './form';
import list from './list';
import examples from './examples';

/* Config */
const module = 'examples/complex';

/* Data */
const modules = {
	components, element, form,
	list, examples,
};

const moduleList = [];

traverse(map(modules, (base, baseName) =>
	map(base, (dummy, itemName) =>
		`${ baseName }/${ itemName }`)), (path) => moduleList.push(path));

/* Exports */
const exported = result(modules, peek(module || rndValue(moduleList)));

export default exported;
