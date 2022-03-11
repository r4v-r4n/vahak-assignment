import { Checkbox, Grid } from '@mui/material';
import { Field, FieldProps } from 'formik';

type MuiCheckboxProps = {
	name: string;
	label: string;
};

const MuiCheckbox = (props: MuiCheckboxProps) => {
	const { name, label, ...rest } = props;
	return (
		<div className='form-control'>
			<Grid container justifyContent='space-around'>
				<Grid container alignItems='center' item xs={4}>
					<label>{label}</label>
				</Grid>
				<Grid item xs={4}>
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
				</Grid>
			</Grid>
		</div>
	);
};

export default MuiCheckbox;
