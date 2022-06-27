import { GetStaticProps } from 'next';
import { useState } from 'react';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import Paragraph from '../components/Paragraph/Paragraph';
import Rating from '../components/Rating/Rating';
import Tag from '../components/Tag/Tag';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

const Homesss = ({ menu }: HomesssProps): JSX.Element => {
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(2);
	menu.flatMap(m => m.pages.map(p => {
		console.log(p.alias);
	}));
	return (
		<>
			<Htag tag="h1">{counter}</Htag>
			<Button appearance="primary" arrow="right" onClick={() => setCounter(counter + 1)}>
				button
			</Button>
			<Button appearance="ghost" arrow="down" onClick={() => setCounter(counter - 1)}>
				button
			</Button>
			<Paragraph size="big" style={{ textTransform: 'uppercase' }}>
				I`m paragraph
			</Paragraph>
			<Tag color="red">This is div red</Tag>
			<Tag color="primary" size="s">
				This is div primary
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	);
};

export default withLayout(Homesss);

export const getStaticProps: GetStaticProps<HomesssProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		}
	);
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomesssProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
