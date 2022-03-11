import { Box, Button, Divider, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { Edit, Rupee } from 'assets';
import { FormikControl } from 'common';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { appDataInReduxStore, incrementStep, bidDetailsReducer } from 'store/app/appSlice';
import * as yup from 'yup';

const JourneyDetails = () => {
	const dispatch = useAppDispatch();

	const { journeyDetails } = useAppSelector(appDataInReduxStore);
	const { source, destination, travellers, carType } = journeyDetails;
	return (
		<div>
			{' '}
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
		</div>
	);
};

export default JourneyDetails;
