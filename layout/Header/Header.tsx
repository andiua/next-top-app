import { HeaderProps } from './Header.props';
import  cn  from 'classnames';
import styles from './Header.module.scss';

const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return <div {...props}>Header</div>;
};

export default Header;
