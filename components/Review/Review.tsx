import { ReviewProps } from './Review.props';
import cn from 'classnames';
import styles from './Review.module.scss';
import UserIcon from './user.svg';
import format from 'date-fns/format';
import { uk } from 'date-fns/locale';
import Rating from '../Rating/Rating'; 

const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
	const { name, title, description, createdAt, rating } = review;
	return (
		<div className={cn(styles.review, className)} {...props}>
			<UserIcon className={styles.user} />
			<div className={styles.title}>
				<span className={styles.name}>{name}:</span>
				<span>{title}</span>
			</div>
			<div className={styles.date}>
				{format(new Date(createdAt), 'dd MMMM yyyy', { locale: uk })}
			</div>
			<div className={styles.rating}>
				<Rating rating={rating} />
			</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
};

export default Review;
