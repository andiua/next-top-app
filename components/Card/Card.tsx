import { CardProps } from './Card.props';
import  cn  from 'classnames';
import styles from './Card.module.scss';

const Card = ({ children, color = 'white', className, ...props }: CardProps): JSX.Element => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.blue]: color === 'blue',
				[styles.white]: color === 'white',
			})}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;