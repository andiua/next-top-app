import { DividerProps } from './Divider.props';
import cn from 'classnames';
import styles from './Divider.module.scss';

const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
	return <hr className={cn(className, styles.hr)} {...props} />;
};

export default Divider;
