import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.scss';
import Rating from '../Rating/Rating';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from './../../helpers/api';
import { useState } from 'react';

const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isError, setError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
				...formData,
				productId,
			});
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Something goes wrong');
			}
		} catch (e: any) {
			setError(e.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Гнида, напиши як тя звати!' },
					})}
					error={errors.name}
					placeholder="Имя"
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Гнида, напиши заголовок свого паскудного отзыва!' },
					})}
					className={styles.title}
					error={errors.title}
					placeholder="Заголовок отзыва"
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name="rating"
						rules={{
							required: { value: true, message: 'Гнида, постав зірочкы!' },
						}}
						render={({ field }) => (
							<Rating
								rating={field.value}
								ref={field.ref}
								isEditable
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {
						required: { value: true, message: 'Гнида, напиши текст свого паскудного отзыва!' },
					})}
					className={styles.description}
					placeholder="Текст отзыва"
					error={errors.description}
				/>
				<div className={styles.submit}>
					<Button appearance="primary">Отправить</Button>
					<span className={styles.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={cn(styles.success, styles.panel)}>
					<div className={styles.successTitle}>Ваш відгук відпралено</div>
					<div className={styles.description}>Дякуємо за ваш відгук</div>
					<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
				</div>
			)}
			{isError && (
				<div className={cn(styles.error, styles.panel)}>
					Something goes wrong
					<CloseIcon className={styles.close} onClick={() => setError(undefined)} />
				</div>
			)}
		</form>
	);
};

export default ReviewForm;
