import { Box, Typography } from '@mui/material';
import './BannerStyles.scss';

const Banner = () => {
	return (
		<Box className='banner' display={'flex'} alignItems={'center'} justifyContent={'center'}>
			<Typography variant='h4'>Place your bid(1/4 Step)</Typography>
		</Box>
	);
};

export default Banner;
