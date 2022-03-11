import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { Edit, Rupee } from 'assets';
import { Formik, Form } from 'formik';
import { FormikControl } from 'common';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { appDataInReduxStore, bidDetailsReducer } from 'store/app/appSlice';
import * as yup from 'yup';

type Values = {
	price: string;
	mobile: string;
	name: string;
	remarks: string;
};

const StepTwo = () => {
	const dispatch = useAppDispatch();

	const { journeyDetails } = useAppSelector(appDataInReduxStore);
	const { source, destination, travellers, carType } = journeyDetails;

	const [price, setPrice] = useState('');

	const [hasPriceBeenConfirmed, setHasPriceBeenConfirmed] = useState(false);

	const initialValues = {
		price: price,
		mobile: '',
		name: '',
		remarks: '',
	};

	const validationSchema = yup.object({
		mobile: yup.string().required('Mobile number is required'),
		name: yup.string().required('Name is required'),
		remarks: yup.string(),
	});

	const onSubmit = (values: Values) => {
		dispatch(bidDetailsReducer(values));
	};

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<Typography variant='caption' color={'GrayText'}>
						JOURNEY DETAILS
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Button startIcon={<Edit />}>Edit</Button>
				</Grid>
			</Grid>
			<Typography variant='subtitle1'>
				{source}/MH - {destination}/TN
			</Typography>
			<Typography variant='subtitle1'>
				{travellers} Persons, {carType}
			</Typography>
			<Divider sx={{ my: 5 }} />
			<Rupee />{' '}
			<TextField
				placeholder='0'
				label='Price'
				value={price}
				onChange={(e) => setPrice(e.target.value)}
				disabled={hasPriceBeenConfirmed}
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
