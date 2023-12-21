import { UserIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const SignInIcon = () => (
	<Link
		className="flex flex-row items-center rounded-xl my-0.5 bg-[#a62828]"
		to="/SignIn"
	>
		<UserIcon className="w-8 h-8 ml-2 my-2" />
		<Typography className="mr-2">Đăng nhập</Typography>
	</Link>
);

export default SignInIcon;
