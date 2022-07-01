import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import Menu from '../Menu/Menu';
import Logo from '../img/logo.svg';
import Link from 'next/link';
import Search from '../../components/Search/Search';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props} className={cn(className, styles.sidebar)}>
			<Link href='/'>
				<a>
					<Logo className={styles.logo} />
				</a>
			</Link>
			<Search />
			<Menu />
		</div>
	);
};

export default Sidebar;
