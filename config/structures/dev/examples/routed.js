import { itemTree } from '../shared/parts';

const routed = {
	type: 'router',
	data: {
		message: 'Some text passed as data from the parent!',
	},
	style: {
		borderColor: 'purple',
		borderWidth: 2,
	},
	platform: {
		android: {
			style: {
				marginTop: 50,
			},
		},
	},
	items: {
		...itemTree,
		child1: {
			style: {
				backgroundColor: 'yellow',
			},
			items: {
				sub: {
					type: 'router',
					style: {
						borderColor: 'red',
						borderWidth: 1,
					},
					items: {
						someText: {
							type: 'text',
							data: 'Some text!',
						},
						someOtherText: {
							type: 'text',
							data: 'Some other text!',
						},
					},
				},
			},
		},
	},
};

export default routed;
