import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
