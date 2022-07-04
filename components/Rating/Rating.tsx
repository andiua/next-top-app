import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.scss';
import StarIcon from './star.svg';
import React, { useState, useEffect } from 'react';

const Rating = React.forwardRef(
	(
		{ isEditable = false, rating, setRating, error, ...props }: RatingProps,
		ref: React.ForwardedRef<HTMLDivElement>
	): JSX.Element => {
		const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
		useEffect(() => {
			constructorRating(rating);
		}, [rating]);

		const constructorRating = (currentRating: number) => {
			const updatedArray = raitingArray.map((r: JSX.Element, i: number) => {
				return (
					<span
						key={i}
						className={cn({ [styles.editable]: isEditable })}
						onMouseEnter={() => changeDisplay(i + 1)}
						onMouseLeave={() => changeDisplay(rating)}
						onClick={() => onClick(i + 1)}
					>
						<StarIcon
							className={cn(styles.star, {
								[styles.fill]: i < currentRating,
								[styles.editable]: isEditable,
							})}
							tabIndex={isEditable ? 0 : -1}
						/>
					</span>
				);
			});
			setRaitingArray(updatedArray);
		};

		const changeDisplay = (i: number) => {
			if (!isEditable) return;
			constructorRating(i);
		};
		const onClick = (i: number) => {
			if (!isEditable || !setRating) return;
			setRating(i);
		};

		return (
			<div ref={ref} {...props} className={cn(styles.raitingWrapper, {
				[styles.error]: error,
			})}>
				{raitingArray.map((raiting, i) => (
					<span key={i}>{raiting}</span>
				))}
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);

export default Rating;
