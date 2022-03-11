import { Box, TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';

type MuiInputProps = {
	name: string;
	label?: string;
	disabled?: boolean;
	variant?: 'outlined' | 'filled' | 'standard';
};

const MuiInput = (props: MuiInputProps) => {
	const { name, variant, label, ...rest } = props;

	return (
		<Field name={name}>
			{({ field, form }: FieldProps) => (
				<Box my={1}>
					<TextField
						id={name}
						variant={variant ? variant : 'outlined'}
						size='small'
						fullWidth
						label={label}
						error={form.errors[name] && form.touched[name] ? true : false}
						helperText={form.errors[name] && form.touched[name] ? form.errors[name] : null}
						{...rest}
						{...field}
					/>
				</Box>
			)}
		</Field>
	);
};

export default MuiInput;
