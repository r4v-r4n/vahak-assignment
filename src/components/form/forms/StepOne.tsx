import { Box, Button, Grid } from '@mui/material';
import { FormikControl } from 'common';
import { Form, Formik } from 'formik';
import { useAppDispatch } from 'store';
import { incrementStep, journeyDetailsReducer } from 'store/app/appSlice';
import * as yup from 'yup';

type Values = {
	source: string;
	destination: string;
	travellers: string;
	carType: string;
};

const StepOne = () => {
	const dispatch = useAppDispatch();
	const carTypeOptions = [
		{ key: 'HatchBack', value: 'HatchBack' },
		{ key: 'Sedan', value: 'Sedan' },
		{ key: 'SUV', value: 'SUV' },
	];

	const initialValues = {
		source: '',
		destination: '',
		travellers: '',
		carType: '',
	};

	const validationSchema = yup.object({
		source: yup.string().required('Source location is required'),
		destination: yup.string().required('Destination is required'),
		carType: yup.string().required('Car Type is required'),
		travellers: yup.number().typeError('Must be a number'),
	});
	const onSubmit = (values: Values) => {
		dispatch(journeyDetailsReducer(values));
		dispatch(incrementStep());
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{() => (
				<Form>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<FormikControl control='muiInput' name='source' label='Source Location *' />
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormikControl control='muiInput' name='destination' label='Destination *' />
						</Grid>

						<Grid item xs={12}>
							<FormikControl
								control='muiSelect'
								name='carType'
								label='Enter Car type *'
								options={carTypeOptions}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormikControl
								control='muiInput'
								name='travellers'
								label='Number of Travellers'
								inputProps={{ maxLength: 10 }}
							/>
						</Grid>
					</Grid>
					<Box my={3} mx={2}>
						<Button variant='contained' color='primary' type='submit' fullWidth>
							Enter Bid Details
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default StepOne;
