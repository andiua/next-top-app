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
import { title } from 'process';

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	console.log(product.characteristics);
	return (
		<Card className={styles.product}>
			<div className={styles.logo}>
				<img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
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
			<div className={styles.creditTitle}>в кредит</div>
			<div className={styles.rateTitle}>
				{product.reviewCount} {declOfNum(product.reviewCount, ['відгук', 'відгуки', 'відгуків'])}
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
			<Divider className={styles.hr} />
			<div className={styles.actions}>
				<Button appearance="primary">Узнать подробнее</Button>
				<Button appearance="ghost" arrow="right">
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
};

export default Product;
