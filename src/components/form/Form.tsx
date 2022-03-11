import { Container } from '@mui/material';
import StepFour from './forms/StepFour';
import StepOne from './forms/StepOne';
import StepThree from './forms/StepThree';
import StepTwoPartOne from './forms/StepTwoPartOne';
import StepTwoPartTwo from './forms/StepTwoPartTwo';

const Form = () => {
	return (
		<Container maxWidth='sm'>
			<StepOne />
			<StepTwoPartOne />
			<StepTwoPartTwo />
			<StepThree />
			<StepFour />
		</Container>
	);
};

export default Form;
