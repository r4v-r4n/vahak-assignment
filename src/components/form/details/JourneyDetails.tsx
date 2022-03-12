import { Button, Divider, Grid, Typography } from '@mui/material';
import { Edit } from 'assets';
import { useAppDispatch, useAppSelector } from 'store';
import { appDataInReduxStore, stepReducer } from 'store/app/appSlice';

const JourneyDetails = () => {
	const dispatch = useAppDispatch();
	const { journeyDetails } = useAppSelector(appDataInReduxStore);
	const { source, destination, travellers, carType } = journeyDetails;
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={9}>
					<Typography variant='caption' color={'GrayText'}>
						JOURNEY DETAILS
					</Typography>
				</Grid>
				<Grid item xs={2}>
					<Button
						startIcon={<Edit />}
						onClick={() => dispatch(stepReducer({ stepNumber: 1, message: 'Place your Bid' }))}>
						Edit
					</Button>
				</Grid>
			</Grid>
			<Typography variant='subtitle1'>
				{source}/MH - {destination}/TN
			</Typography>
			<Typography variant='subtitle1'>
				{travellers} Persons, {carType}
			</Typography>
			<Divider sx={{ my: 5 }} />
		</>
	);
};

export default JourneyDetails;
