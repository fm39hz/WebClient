import { Input } from '@mui/material';

type InputFieldProps = {
	isPassword: boolean;
	inputValue: string;
	getValue(event: any): void;
};

const InputField = (props: InputFieldProps) => {
	return (
		<Input
			className="text-sm bg-white rounded-lg m-2 w-2/6"
			type={props.isPassword ? 'password' : ''}
			placeholder={props.inputValue}
			onChange={props.getValue}
		/>
	);
};
export default InputField;
