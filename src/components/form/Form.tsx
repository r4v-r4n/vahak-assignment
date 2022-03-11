import { Box, Container } from '@mui/material';
import { useAppSelector } from 'store';
import { appDataInReduxStore } from 'store/app/appSlice';
import StepFour from './forms/StepFour';
import StepOne from './forms/StepOne';
import StepThree from './forms/StepThree';
import StepTwo from './forms/StepTwo';

const Form = () => {
	const { activeStepNumber } = useAppSelector(appDataInReduxStore);

	const stepperFunction = (key: number) => {
		switch (key) {
			case 1:
				return <StepTwo />;

			case 2:
				return <StepThree />;

			case 3:
				return <StepFour />;

			default:
				return <StepOne />;
		}
	};
	return (
		<Container maxWidth='sm'>
			<Box mt={4}>{stepperFunction(activeStepNumber)}</Box>
		</Container>
	);
};

export default Form;
