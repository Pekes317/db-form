import { HelloWorld } from '../constants';
import { FormInput } from '../constants/types';

type FormState = FormInput[];

const initialState: FormState = [{
	type: 'radio',
	name: 'service',
	value: 'LINKnet-new',
	label: 'LINKnet New'
},
{
	type: 'radio',
	name: 'service',
	value: 'LINKnet-edit',
	label: 'LINKnet Edit'
}];

export default (state = initialState, action) => {
	switch (action.type) {
		case HelloWorld:
			return action.payload;

		default:
			return state;
	}
};