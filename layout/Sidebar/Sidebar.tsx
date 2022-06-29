import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import Menu from '../Menu/Menu';
import Logo from '../img/logo.svg';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props} className={cn(className, styles.sidebar)}>
			<Logo className={ styles.logo} />
			<div>Search...</div>
			<Menu />
		</div>
	);
};

export default Sidebar;
