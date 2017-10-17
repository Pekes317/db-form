import * as React from 'react';

import { FormProps } from './FormProps.model';
import FormInput from '../FormInput';

const Form = ({ fields }: FormProps ) => (
	<form>
		{
			fields.map((data, i) => <FormInput key={i} field={data} />)
		}
	</form>
);
export default Form;