import { Box, Typography } from '@mui/material';
import { useAppSelector } from 'store';
import { appDataInReduxStore } from 'store/app/appSlice';
import './BannerStyles.scss';

const Banner = () => {
	const { step } = useAppSelector(appDataInReduxStore);
	return (
		<Box className='banner' display={'flex'} alignItems={'center'} justifyContent={'center'}>
			<Typography variant='h4'>{step}</Typography>
		</Box>
	);
};

export default Banner;
