import { Box, Button, Grid, Typography } from '@mui/material';
import { Edit } from 'assets';
import { FormikControl } from 'common';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'store';
import { appDataInReduxStore, stepReducer } from 'store/app/appSlice';
import * as yup from 'yup';
import BidDetails from '../details/BidDetails';
import JourneyDetails from '../details/JourneyDetails';
import { OtpTypes } from '../FormTypes';

const StepThree = () => {
	const validOtp = 1234;
	const otpInputProps = {
		maxLength: 1,
		style: { fontSize: 50, textAlign: 'center' },
	};
	const dispatch = useAppDispatch();

	const otpFields = ['firstDigit', 'secondDigit', 'thirdDigit', 'fourthDigit'];

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

	const onSubmit = (values: OtpTypes) => {
		if (
			validOtp ===
			Number(values.firstDigit + values.secondDigit + values.thirdDigit + values.fourthDigit)
		) {
			dispatch(stepReducer({ stepNumber: 4, message: 'Summary & Submit Bid' }));
		}
	};

	const { bidDetails } = useAppSelector(appDataInReduxStore);
	const { mobile } = bidDetails;
	return (
		<>
			<JourneyDetails />
			<BidDetails />
			<Typography variant='subtitle1'>
				We've sent an OTP on your mobile number, Please enter it below to submit your bid{' '}
				<strong>{mobile}</strong> <Button startIcon={<Edit />}>Edit</Button>
			</Typography>
			<Grid container justifyContent={'center'}>
				<Grid item xs={12}>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}>
						{() => (
							<Form>
								<Grid container spacing={2} justifyContent='center'>
									{otpFields.map((field, index) => {
										return (
											<Grid item xs={2} key={index}>
												<FormikControl
													control='muiInput'
													name={field}
													variant='standard'
													inputProps={otpInputProps}
												/>
											</Grid>
										);
									})}
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
		</>
	);
};

export default StepThree;
