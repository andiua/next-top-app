import { HtagProps } from './Htag.props';
import style from './Htag.module.scss';


const Htag = ({tag, children}: HtagProps): JSX.Element => {
	return (
		<>
			{tag === 'h1' && <h1 className={style.h1}>{children}</h1>}
			{tag === 'h2' && <h2 className={style.h2}>{children}</h2>}
			{tag === 'h3' && <h3 className={style.h3}>{children}</h3>}
		</>
	);
};

export default Htag;