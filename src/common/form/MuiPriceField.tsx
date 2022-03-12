import { Box, InputAdornment, TextField } from '@mui/material';
import { Rupee } from 'assets';
import { Field, FieldProps } from 'formik';

type MuiPriceFieldProps = {
	name: string;
	label?: string;
	disabled?: boolean;
	variant?: 'outlined' | 'filled' | 'standard';
};

const MuiPriceField = (props: MuiPriceFieldProps) => {
	const { name, variant, label, ...rest } = props;

	return (
		<Field name={name}>
			{({ field, form }: FieldProps) => (
				<Box my={1}>
					<TextField
						placeholder='0'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<Rupee />
								</InputAdornment>
							),
							disableUnderline: true,
						}}
						inputProps={{ maxLength: 10 }}
						variant='standard'
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

export default MuiPriceField;
