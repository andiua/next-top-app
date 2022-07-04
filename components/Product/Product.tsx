import { ProductProps } from './Product.props';
import cn from 'classnames';
import styles from './Product.module.scss';
import Card from '../Card/Card';
import Rating from './../Rating/Rating';
import Tag from './../Tag/Tag';
import Button from '../Button/Button';
import { priceUa } from '../../helpers/helpers';
import Divider from '../Divider/Divider';
import { declOfNum } from './../../helpers/helpers';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Review from './../Review/Review';
import ReviewForm from './../ReviewForm/ReviewForm';

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false); //відкр/закр панель відгуків
	const reviewRef = useRef<HTMLDivElement>(null);

	const scrollToReview = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<div className={className} {...props}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceUa(product.price)}
					{product.oldPrice && (
						<Tag className={styles.discount} color="green">
							{priceUa(-product.oldPrice + product.price)}
						</Tag>
					)}
				</div>
				<div className={styles.credit}>
					{priceUa(product.credit)}/<span className={styles.month}>month</span>
				</div>
				<div className={styles.rating}>
					<Rating rating={product.reviewAvg || product.initialRating} />
				</div>
				<div className={styles.tags}>
					{product.categories.map((c) => (
						<Tag className={styles.category} key={c} color="ghost">
							{c}
						</Tag>
					))}
				</div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>кредит</div>
				<div className={styles.rateTitle}>
					{/* declOfNum додає відмінювання слова відгук*/}
					<a href="#ref" onClick={scrollToReview}>
						{product.reviewCount}{' '}
						{declOfNum(product.reviewCount, ['відгук', 'відгуки', 'відгуків'])}
					</a>
				</div>
				<Divider className={styles.hr} />
				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{product.characteristics.map((c) => (
						<div className={styles.characteristic} key={c.name}>
							<span className={styles.characteristicName}>{c.name}</span>
							<span className={styles.characteristicDots}></span>
							<span className={styles.characteristicValue}>{c.value}</span>
						</div>
					))}
				</div>
				{product.advantages && (
					<div className={styles.advBlock}>
						<div className={styles.advantages}>
							<span className={styles.advTitle}>Преимущества</span>
							<div>{product.advantages}</div>
						</div>
						{product.disadvantages && (
							<div className={styles.disadvantages}>
								<span className={styles.advTitle}>Недостатки</span>
								<div>{product.disadvantages}</div>
							</div>
						)}
					</div>
				)}
				<Divider className={cn(styles.hr, styles.hr2)} />
				<div className={styles.actions}>
					<Button appearance="primary">Узнать подробнее</Button>

					<Button
						appearance="ghost"
						arrow={isReviewOpened ? 'down' : 'right'}
						onClick={() => {
							setIsReviewOpened(!isReviewOpened);
						}}
					>
						Читать отзывы
					</Button>
				</div>
			</Card>
			<Card
				color="blue"
				className={cn(styles.reviews, {
					[styles.opened]: isReviewOpened,
					[styles.closed]: !isReviewOpened,
				})}
				ref={reviewRef}
			>
				{product.reviews.map((r) => (
					<div key={r._id}>
						<Review review={r} />
						<Divider />
					</div>
				))}
				<ReviewForm productId={product._id} />
			</Card>
		</div>
	);
};

export default Product;
