import { Box, Button } from '@mui/material';
import BidDetails from '../details/BidDetails';
import JourneyDetails from '../details/JourneyDetails';

const StepFour = () => {
	return (
		<>
			<JourneyDetails />
			<BidDetails />
			<Box mx={3}>
				<Button variant='contained' color='primary' type='submit' fullWidth>
					Submit bid
				</Button>
			</Box>
		</>
	);
};

export default StepFour;
