import { Box, Button, Grid } from '@mui/material';
import { FormikControl } from 'common';
import { carTypeOptions } from 'constants/Constants';
import { Form, Formik } from 'formik';
import { useAppDispatch } from 'store';
import { stepReducer, journeyDetailsReducer } from 'store/app/appSlice';
import { regexForOtherCarTypes, regexForSuv } from 'utils/regex';
import * as yup from 'yup';
import { JourneyDetailsTypes } from '../FormTypes';

const StepOne = () => {
	const dispatch = useAppDispatch();
	let carTypeSelected = '';

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
		travellers: yup.string().test(
			'make-sure-passenger-count-is-valid', // name of the test
			`Must be and number and between ${carTypeSelected === 'SUV' ? '1-6' : '1-4'}`, //message to display when test fails
			(value = '') => {
				const isTravellerCountValid =
					carTypeSelected === 'SUV' ? regexForSuv.test(value) : regexForOtherCarTypes.test(value);
				if (!isTravellerCountValid) return false;
				return true;
			}
		),
	});

	const onSubmit = (values: JourneyDetailsTypes) => {
		/* storing values of this form in redux and sending user to step two of the form */
		dispatch(journeyDetailsReducer(values));
		dispatch(stepReducer({ stepNumber: 2, message: 'Place your Bid' }));
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{(form) => {
				/*
				Setting car type selected by user in component for conditionally rendering error message and for swapping regex
				// TODO: refactor this
				 */
				carTypeSelected = form.values.carType;
				return (
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
									inputProps={{ maxLength: 1 }}
								/>
							</Grid>
						</Grid>

						<Box my={3} mx={2}>
							<Button variant='contained' color='primary' type='submit' fullWidth>
								Enter Bid Details
							</Button>
						</Box>
					</Form>
				);
			}}
		</Formik>
	);
};

export default StepOne;
