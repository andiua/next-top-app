import { FooterProps } from './Footer.props';
import  cn  from 'classnames';
import styles from './Footer.module.scss';

const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return <div {...props}>Footer</div>;
};

export default Footer;
