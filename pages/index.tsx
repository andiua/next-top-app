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
import Input from '../components/Input/Input';
import Textarea from './../components/Textarea/Textarea';
import { API } from '../helpers/api';

const Homesss = ({ menu }: HomesssProps): JSX.Element => {
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(2);
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
			<Input placeholder="test" />
			<Textarea placeholder='one more test'/>
		</>
	);
};

export default withLayout(Homesss);

export const getStaticProps: GetStaticProps<HomesssProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		API.topPage.find,
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
