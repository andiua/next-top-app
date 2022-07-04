import React from 'react';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';
import styles from './Textarea.module.scss';

const Textarea = React.forwardRef(
	({ className, error, ...props }: TextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
		return (
			<div className={cn(className, styles.textareaWrapper)}>
				<textarea
					className={cn(styles.textarea, className, {
						[styles.error]: error,
					})}
					{...props}
					ref={ref}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);

export default Textarea;
