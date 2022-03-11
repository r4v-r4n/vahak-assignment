import { Container } from '@mui/material';
import { useAppSelector } from 'store';
import { appDataInReduxStore } from 'store/app/appSlice';
import StepFour from './forms/StepFour';
import StepOne from './forms/StepOne';
import StepThree from './forms/StepThree';
import StepTwoPartOne from './forms/StepTwoPartOne';
import StepTwoPartTwo from './forms/StepTwoPartTwo';

const Form = () => {
	const { activeStepNumber } = useAppSelector(appDataInReduxStore);

	const stepperFunction = (key: number) => {
		switch (key) {
			case 1:
				return <StepTwoPartOne />;

			case 2:
				return <StepTwoPartTwo />;

			case 3:
				return <StepThree />;

			case 4:
				return <StepFour />;

			default:
				return <StepOne />;
		}
	};
	return <Container maxWidth='sm'>{stepperFunction(activeStepNumber)}</Container>;
};

export default Form;
