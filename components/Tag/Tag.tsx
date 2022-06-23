import { Tag } from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';

const Tag = ({
	size = 's',
	children,
	color = 'ghost',
	href,
	className,
	...props
}: Tag): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.ghost]: color === 'ghost',
				[styles.green]: color === 'green',
				[styles.grey]: color === 'grey',
				[styles.red]: color === 'red',
				[styles.primary]: color === 'primary',
			})}
			{...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

export default Tag;
