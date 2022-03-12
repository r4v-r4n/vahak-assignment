import { Box, InputAdornment, TextField } from '@mui/material';
import { Rupee } from 'assets';
import { Field, FieldProps } from 'formik';

type MuiPriceFieldProps = {
	name: string;
	label?: string;
	disabled?: boolean;
	value?: string;
};

const MuiPriceField = (props: MuiPriceFieldProps) => {
	const { name, label } = props;

	return (
		<Field name={name}>
			{({ field, form }: FieldProps) => {
				const { value, ...rest } = field;

				return (
					<Box my={1} display='flex' justifyContent={'center'}>
						<TextField
							placeholder='0,00,000'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start' sx={{ fontSize: '3rem' }}>
										<Rupee />
									</InputAdornment>
								),
								disableUnderline: true,
							}}
							inputProps={{
								maxLength: 7,
								style: { fontSize: 50, width: 250 },
							}}
							variant='standard'
							label={label}
							error={form.errors[name] && form.touched[name] ? true : false}
							helperText={form.errors[name] && form.touched[name] ? form.errors[name] : null}
							value={field.value} //TODO: update this to use comma in between
							{...rest}
						/>
					</Box>
				);
			}}
		</Field>
	);
};

export default MuiPriceField;
