import { SidebarProps } from './Sidebar.props';
import  cn  from 'classnames';
import styles from './Sidebar.module.scss';

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return <div {...props}>Sidebar</div>;
};

export default Sidebar;
