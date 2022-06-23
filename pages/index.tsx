import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import Paragraph from '../components/Paragraph/Paragraph';
import Tag from '../components/Tag/Tag';

const Home = () => {
	const [counter, setCounter] = useState<number>(0);
	useEffect(() => {
		console.log('Counter ' + counter);

		return () => {
			console.log('Unmount ' + counter);
		};
	});

	return (
		<>
			<Htag tag="h1">{counter}</Htag>
			<Button
				appearance="primary"
				arrow="right"
				onClick={() => setCounter(counter + 1)}>
				button
			</Button>
			<Button
				appearance="ghost"
				arrow="down"
				onClick={() => setCounter(counter - 1)}>
				button
			</Button>
			<Paragraph
				size="big"
				style={{ textTransform: 'uppercase' }}>
				I`m paragraph
			</Paragraph>
			<Tag color="red">This is div red</Tag>
			<Tag
				color="primary"
				size="s">
				This is div primary
			</Tag>
		</>
	);
};

export default Home;
