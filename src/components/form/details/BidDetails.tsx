import { Divider, Grid, Typography } from '@mui/material';
import { Rupee } from 'assets';
import { useAppSelector } from 'store';
import { appDataInReduxStore } from 'store/app/appSlice';

const BidDetails = () => {
	const { bidDetails } = useAppSelector(appDataInReduxStore);
	const { mobile, name, price, remarks } = bidDetails;
	return (
		<>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant='caption' color={'GrayText'}>
						BID DETAILS
					</Typography>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={8}>
					<Typography variant='subtitle1'>+91-{mobile}</Typography>
					<Typography variant='subtitle1'>{name}</Typography>
					{remarks && <Typography variant='subtitle1'>{remarks}</Typography>}
				</Grid>
				<Grid item xs={4}>
					<Grid item xs={12} container justifyContent={'center'} alignItems='center'>
						<Typography variant='h5'>
							<Rupee /> {price}
						</Typography>
					</Grid>
					<Grid item xs={12} container justifyContent={'center'}>
						<Typography variant='caption' color={'GrayText'}>
							Fixed Price{' '}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Divider sx={{ my: 5 }} />
		</>
	);
};

export default BidDetails;
