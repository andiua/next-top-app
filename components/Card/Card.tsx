import { CardProps } from './Card.props';
import  cn  from 'classnames';
import styles from './Card.module.scss';
import React from 'react';

const Card = React.forwardRef(
	(
		{ children, color = 'white', className, ...props }: CardProps,
		ref: React.ForwardedRef<HTMLDivElement>
	): JSX.Element => {
		return (
			<div
				className={cn(styles.card, className, {
					[styles.blue]: color === 'blue',
					[styles.white]: color === 'white',
				})}
				ref={ ref}
				{...props}
			>
				{children}
			</div>
		);
	}
);

export default Card;