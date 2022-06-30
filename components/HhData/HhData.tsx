import { HhDataProps } from './HhData.props';
import cn from 'classnames';
import styles from './HhData.module.scss';
import Card from '../Card/Card';
import RateIcon from './rate.svg';
import { priceUa } from '../../helpers/helpers';

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<span className={styles.title}>Всего вакансий</span>
				<span className={styles.countStat}>{count}</span>
			</Card>
			<Card className={styles.salary}>
				<div>
					<span className={styles.title}>Начальный</span>
					<span className={styles.salaryValue}>{priceUa(juniorSalary)} ₴</span>
					<span className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</span>
				</div>
				<div>
					<span className={styles.title}>Средний</span>
					<span className={styles.salaryValue}>{priceUa(middleSalary)} ₴</span>
					<span className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</span>
				</div>
				<div>
					<span className={styles.title}>Профессионал</span>
					<span className={styles.salaryValue}>{priceUa(seniorSalary)} ₴</span>
					<span className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</span>
				</div>
			</Card>
		</div>
	);
};

export default HhData;
