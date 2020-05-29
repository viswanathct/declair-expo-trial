import { collection, color, form, input, style, timer } from '../../sources';
import { child } from '../../structures';

const routed = {
	sources: {
		collection, color, form, input, style, timer,
	},
	structure: {
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
			child: child,
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
	},
};

export default routed;
