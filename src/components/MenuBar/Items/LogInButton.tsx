import { UserIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const SignInButton = () => (
	<Button className="flex flex-row items-center rounded-xl my-0.5 bg-inherit">
		<UserIcon className="w-8 h-8 mx-2" />
		<Link className="mr-2" to="/SignIn">
			Đăng nhập
		</Link>
	</Button>
);

export default SignInButton;
