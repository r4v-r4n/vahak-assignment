import { Box } from '@mui/material';
import { useAppSelector } from 'store';
import { appDataInReduxStore } from 'store/app/appSlice';

const StepTwoPartOne = () => {
	const { journeyDetails } = useAppSelector(appDataInReduxStore);

	return <>StepTwoPartOne</>;
};

export default StepTwoPartOne;
