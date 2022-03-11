import { Button, Grid } from '@mui/material';
import { FormikControl } from 'common';
import { Form, Formik } from 'formik';
import { useAppDispatch } from 'store';
import { journeyDetailsReducer } from 'store/app/appSlice';
import * as yup from 'yup';

type Values = {
	sourceLocation: string;
	destination: string;
	travellers: string;
	carType: string;
};

const StepOne = () => {
	const dispatch = useAppDispatch();
	const carTypeOptions = [
		{ key: 'hatchBack', value: 'HatchBack' },
		{ key: 'sedan', value: 'Sedan' },
		{ key: 'suv', value: 'SUV' },
	];

	const initialValues = {
		sourceLocation: '',
		destination: '',
		travellers: '',
		carType: '',
	};

	const validationSchema = yup.object({
		sourceLocation: yup.string().required('Source location is required'),
		destination: yup.string().required('Destination is required'),
		carType: yup.string().required('Car Type is required'),
		travellers: yup.number().required('Travellers is required'),
	});
	const onSubmit = (values: Values) => {
		console.log(values);
		dispatch(journeyDetailsReducer(values));
	};

	return (
		<>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				{() => (
					<Form>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<FormikControl
									control='muiInput'
									name='sourceLocation'
									label='Source Location'
									required
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<FormikControl control='muiInput' name='destination' label='Destination' required />
							</Grid>

							<Grid item xs={12}>
								<FormikControl
									control='muiSelect'
									name='carType'
									label='Enter Car type'
									options={carTypeOptions}
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<FormikControl
									control='muiInput'
									name='travellers'
									label='Number of Travellers'
									type='number'
								/>
							</Grid>
						</Grid>
						<Button variant='contained' color='primary' type='submit' fullWidth>
							Enter Bid Details
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default StepOne;
