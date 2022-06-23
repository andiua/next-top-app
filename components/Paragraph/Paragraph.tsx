import { ParagraphProps } from './Paragraph.props';
import  cn  from 'classnames';
import styles from './Paragraph.module.scss';

const Paragraph = ({ children, size = 'middle', className, ...props }: ParagraphProps): JSX.Element => {
	return (
		<p
			className={cn(styles.paragraph, className, {
				[styles.small]: size === 'small',
				[styles.middle]: size === 'middle',
				[styles.big]: size === 'big',
			})}
			{...props}>
			{children}
		</p>
	);
};

export default Paragraph;
