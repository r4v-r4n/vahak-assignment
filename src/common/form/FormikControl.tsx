import MuiCheckbox from './MuiCheckbox';
import MuiInput from './MuiInput';
import MuiPriceField from './MuiPriceField';
import MuiSelect from './MuiSelect';

type FormikControlType = {
	control: string;
	InputProps?: {};
	inputProps?: {};
	name: string;
	label?: string;
	variant?: 'outlined' | 'filled' | 'standard';

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
		case 'muiPriceField':
			return <MuiPriceField {...rest} />;

		default:
			return null;
	}
};

export default FormikControl;
