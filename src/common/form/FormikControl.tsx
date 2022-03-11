import MuiCheckbox from './MuiCheckbox';
import MuiInput from './MuiInput';
import MuiSelect from './MuiSelect';

type FormikControlType = {
	control: string;
	inputProps?: {};
	name: string;
	label: string;
	type?: string;
	disabled?: boolean;
	options?: Array<{ key: string; value: string }>;
};

const FormikControl = (props: FormikControlType) => {
	const { control, ...rest } = props;
	switch (control) {
		case 'muiInput':
			return <MuiInput {...rest} />;
		case 'muiSelect':
			return <MuiSelect {...rest} />;
		case 'muiCheckbox':
			return <MuiCheckbox {...rest} />;

		default:
			return null;
	}
};

export default FormikControl;
