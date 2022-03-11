import { Box, Container } from '@mui/material';
import { useAppSelector } from 'store';
import { appDataInReduxStore } from 'store/app/appSlice';
import StepFour from './forms/StepFour';
import StepOne from './forms/StepOne';
import StepThree from './forms/StepThree';
import StepTwo from './forms/StepTwo';

const Form = () => {
	const { step } = useAppSelector(appDataInReduxStore);

	/* Based on which step of form user is at we switch form */
	const stepperFunction = (key: number) => {
		switch (key) {
			case 1:
				return <StepOne />;
			case 2:
				return <StepTwo />;
			case 3:
				return <StepThree />;
			case 4:
				return <StepFour />;
			default:
				return <StepOne />;
		}
	};

	return (
		<Container maxWidth='sm'>
			<Box my={4}>{stepperFunction(step?.stepNumber)}</Box>
		</Container>
	);
};

export default Form;
