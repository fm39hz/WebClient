import { UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const SignInIcon = () => (
	<Link
		className="flex flex-row items-center rounded-xl my-0.5 bg-inherit mr-2"
		to="/SignIn"
	>
		<UserIcon className="w-8 h-8 mx-2" />
		Đăng nhập
	</Link>
);

export default SignInIcon;
