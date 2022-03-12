import { Box, Button, Divider, Grid, InputAdornment } from '@mui/material';
import { FormikControl } from 'common';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useAppDispatch } from 'store';
import { bidDetailsReducer, stepReducer } from 'store/app/appSlice';
import { mobileRegex, nameRegex } from 'utils/regex';
import * as yup from 'yup';
import JourneyDetails from '../details/JourneyDetails';
import { BidDetailsTypes } from '../FormTypes';

const StepTwo = () => {
	const dispatch = useAppDispatch();

	const [hasPriceBeenConfirmed, setHasPriceBeenConfirmed] = useState(false);

	const initialValues = {
		price: '',
		mobile: '',
		name: '',
		remarks: '',
		isRateNegotiable: false,
	};

	const validationSchema = yup.object({
		price: yup.string().required('please enter Bid amount'),

		mobile: yup
			.string()
			.matches(mobileRegex, {
				message: 'mobile number is invalid, please enter a valid 10 digit mobile number',
				excludeEmptyString: true,
			})
			.required('mobile number is required'),

		name: yup
			.string()
			.matches(nameRegex, {
				message: 'invalid name, please enter a name with only alphabets',
				excludeEmptyString: true,
			})
			.required('name is required'),

		remarks: yup.string(),
	});

	const onSubmit = (values: BidDetailsTypes) => {
		dispatch(bidDetailsReducer(values));
		dispatch(stepReducer({ stepNumber: 3, message: 'Verify OTP' }));
	};

	return (
		<>
			<JourneyDetails />

			<>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}>
					{(form) => {
						let disableNextButton = form.values.price.length === 0;
						return (
							<Form>
								<Grid container>
									<Grid item xs={12}>
										<FormikControl control='muiPriceField' name='price' />
									</Grid>
									<Grid item xs={12} container justifyContent={'center'}>
										<FormikControl
											control='muiCheckbox'
											name='isRateNegotiable'
											label='Rate negotiable'
										/>
									</Grid>

									{!hasPriceBeenConfirmed ? (
										<Button
											variant='contained'
											color='primary'
											fullWidth
											disabled={disableNextButton}
											onClick={() => setHasPriceBeenConfirmed(!hasPriceBeenConfirmed)}>
											Next
										</Button>
									) : (
										<>
											<Divider sx={{ my: 3 }} />
											<Divider sx={{ my: 3 }} />
											<Grid item xs={12}>
												<FormikControl
													control='muiInput'
													name='mobile'
													label='Enter your 10 digit mobile number *'
													InputProps={{
														startAdornment: <InputAdornment position='start'>+91-</InputAdornment>,
													}}
													inputProps={{ maxLength: 10 }}
												/>
											</Grid>

											<Grid item xs={12}>
												<FormikControl control='muiInput' name='name' label='Enter your Name *' />
											</Grid>

											<Grid item xs={12}>
												<FormikControl
													control='muiInput'
													name='remarks'
													label='Enter Remarks (optional)'
												/>
											</Grid>

											<Grid item xs={12}>
												<Box my={3} mx={2}>
													<Button variant='contained' color='primary' type='submit' fullWidth>
														Verify via OTP
													</Button>
												</Box>
											</Grid>
										</>
									)}
								</Grid>
							</Form>
						);
					}}
				</Formik>
			</>
		</>
	);
};

export default StepTwo;
