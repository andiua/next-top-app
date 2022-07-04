import React from 'react';
import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.scss';

const Input = React.forwardRef(
	(
		{ className, error, ...props }: InputProps,
		ref: React.ForwardedRef<HTMLInputElement>
	): JSX.Element => (
		<div className={cn(className, styles.inputWrapper)}>
			<input
				className={cn(styles.input, {
					[styles.error]: error,
				})}
				{...props}
				ref={ref}
			/>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	)
);

export default Input;
