import { Box, Button, Grid, Typography } from '@mui/material';
import { Edit } from 'assets';
import { FormikControl } from 'common';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'store';
import { appDataInReduxStore } from 'store/app/appSlice';
import * as yup from 'yup';
import BidDetails from '../details/BidDetails';
import JourneyDetails from '../details/JourneyDetails';

type Values = {
	firstDigit: string;
	secondDigit: string;
	thirdDigit: string;
	fourthDigit: string;
};

const StepThree = () => {
	const dispatch = useAppDispatch();

	const initialValues = {
		firstDigit: '',
		secondDigit: '',
		thirdDigit: '',
		fourthDigit: '',
	};

	const validationSchema = yup.object().shape({
		firstDigit: yup.number().required('Required'),
		secondDigit: yup.number().required('Required'),
		thirdDigit: yup.number().required('Required'),
		fourthDigit: yup.number().required('Required'),
	});

	const onSubmit = (values: Values) => {
		console.log(values);
	};

	const { bidDetails } = useAppSelector(appDataInReduxStore);
	const { mobile } = bidDetails;
	return (
		<div>
			{' '}
			<JourneyDetails />
			<BidDetails />
			<Typography variant='subtitle1'>
				We've sent an OTP on your mobile number, Please enter it below to submit your bid {mobile}{' '}
				<Button startIcon={<Edit />}>Edit</Button>
			</Typography>
			<Grid container justifyContent={'center'}>
				<Grid item xs={12}>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}>
						{() => (
							<Form>
								<Grid container>
									<Grid item xs={2}>
										<FormikControl
											control='muiInput'
											name='firstDigit'	variant='standard'
											inputProps={{
												maxLength: 1,
											}}
										/>
									</Grid>
									<Grid item xs={2}>
										<FormikControl
											control='muiInput'
											name='secondDigit' 	variant='standard'
											inputProps={{
												maxLength: 1,
											}}
										/>
									</Grid>
									<Grid item xs={2}>
										<FormikControl
											control='muiInput' 	variant='standard'
											name='thirdDigit'
											inputProps={{
												maxLength: 1,
											}}
										/>
									</Grid>
									<Grid item xs={2}>
										<FormikControl
											control='muiInput'
											name='fourthDigit' 	variant='standard'
											inputProps={{
												maxLength: 1,
											}}
										/>
									</Grid>
								</Grid>

								<Box my={3} mx={2} display='flex' alignItems='center' flexDirection='column'>
									<Typography component='a' href='/' variant='subtitle2' gutterBottom>
										Resend OTP Again
									</Typography>
									<Button variant='contained' color='primary' type='submit' fullWidth>
										Verify via OTP
									</Button>
								</Box>
							</Form>
						)}
					</Formik>
				</Grid>
			</Grid>
		</div>
	);
};

export default StepThree;
