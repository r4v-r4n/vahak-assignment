import { Box, MenuItem, TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';

type MuiSelectProps = {
	name: string;
	label?: string;
	disabled?: boolean;
	options?: Array<{ key: string; value: string }>;
};

function MuiSelect(props: MuiSelectProps) {
	const { name, label, options, ...rest } = props;

	return (
		<div className='form-control'>
			<Field name={name}>
				{({ field, form }: FieldProps) => (
					<Box my={1}>
						<TextField
							select
							fullWidth
							size='small'
							variant='outlined'
							id={name}
							label={label}
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
