import { Box, Button, Divider, Grid, InputAdornment, TextField } from '@mui/material';
import { Rupee } from 'assets';
import { FormikControl } from 'common';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useAppDispatch } from 'store';
import { bidDetailsReducer, stepReducer } from 'store/app/appSlice';
import * as yup from 'yup';
import JourneyDetails from '../details/JourneyDetails';
import { BidDetailsTypes } from '../FormTypes';

const StepTwo = () => {
	const dispatch = useAppDispatch();

	const [price, setPrice] = useState('');

	const [hasPriceBeenConfirmed, setHasPriceBeenConfirmed] = useState(false);

	const initialValues = {
		price: price,
		mobile: '',
		name: '',
		remarks: '',
	};

	const validationSchema = yup.object({
		mobile: yup.number().typeError('Must be a number').required('Mobile number is required'),
		name: yup.string().required('Name is required'),
		remarks: yup.string(),
	});

	const onSubmit = (values: BidDetailsTypes) => {
		dispatch(bidDetailsReducer(values));
		dispatch(stepReducer({ stepNumber: 3, message: 'Verify OTP' }));
	};

	return (
		<>
			<JourneyDetails />

			<TextField
				fullWidth
				placeholder='0'
				value={price}
				onChange={(e) => setPrice(e.target.value)}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<Rupee />{' '}
						</InputAdornment>
					),
					disableUnderline: true,
				}}
				inputProps={{ maxLength: 10 }}
				disabled={hasPriceBeenConfirmed}
				variant='standard'
			/>
			{!hasPriceBeenConfirmed ? (
				<Button
					variant='contained'
					color='primary'
					disabled={price.length < 1}
					onClick={() => setHasPriceBeenConfirmed(!hasPriceBeenConfirmed)}>
					Next
				</Button>
			) : (
				<>
					<Divider sx={{ my: 3 }} />
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}>
						{() => (
							<Form>
								<Grid container>
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
								</Grid>
								<Box my={3} mx={2}>
									<Button variant='contained' color='primary' type='submit' fullWidth>
										Verify via OTP
									</Button>
								</Box>
							</Form>
						)}
					</Formik>
				</>
			)}
		</>
	);
};

export default StepTwo;
