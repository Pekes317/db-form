import * as React from 'react';

import { FormInputProps } from './FormInputProps.model';

const FormInput = ({key, field}: FormInputProps) => (
	<div>
		<label>
			<input name={field.name} type={field.type} value={field.value} />
			{field.label}</label>
	</div>
);

export default FormInput;