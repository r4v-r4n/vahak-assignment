import { Box, TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';
import { CamelCaseToNaturalCase } from 'utils/CamelCaseToNaturalCase';

type MuiInputProps = {
	name: string;
	inputProps?: any;
	disabled?: boolean;
};

const MuiInput = (props: MuiInputProps) => {
	const { name, ...rest } = props;
	return (
		<Field name={name}>
			{({ field, form }: FieldProps) => (
				<Box my={3}>
					<TextField
						id={name}
						variant='filled'
						size='small'
						fullWidth
						label={CamelCaseToNaturalCase(name)}
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
