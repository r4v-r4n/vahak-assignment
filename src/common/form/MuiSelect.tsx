import { Box, MenuItem, TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';
import { CamelCaseToNaturalCase } from 'utils/CamelCaseToNaturalCase';

type MuiSelectProps = {

	name: string;
	disabled?: boolean;
	options?: Array<{ key: string; value: string }>;
};

function MuiSelect(props: MuiSelectProps) {
	const {   name, options, ...rest } = props;

	return (
		<div className='form-control'>
			<Field name={name}>
				{({ field, form }: FieldProps) => (
					<Box my={3}>
						<TextField
							select
							fullWidth
							size='small'
							variant='filled'
							id={name}
							label={CamelCaseToNaturalCase(name)}
							{...rest}
							{...field}
							error={form.errors[name] && form.touched[name] ? true : false}
							helperText={form.errors[name] && form.touched[name] ? form.errors[name] : null}>
							{options?.map((option) => (
								<MenuItem key={option.key} value={option.key}>
									{option.value}
								</MenuItem>
							))}
						</TextField>
					</Box>
				)}
			</Field>
		</div>
	);
}

export default MuiSelect;
