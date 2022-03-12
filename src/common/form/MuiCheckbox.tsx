import { Checkbox, FormGroup, FormControlLabel, FormControlLabelProps } from '@mui/material';
import { Field, FieldProps } from 'formik';

type MuiCheckboxProps = {
	name: string;
	label?: string | number;
};

const MuiCheckbox = (props: MuiCheckboxProps) => {
	const { name, label = '', ...rest } = props;
	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Field name={name}>
						{({ field }: FieldProps) => (
							<Checkbox
								color='primary'
								id={field.name}
								checked={field.value}
								{...field}
								{...rest}
							/>
						)}
					</Field>
				}
				label={label}
			/>
		</FormGroup>
	);
};

export default MuiCheckbox;
