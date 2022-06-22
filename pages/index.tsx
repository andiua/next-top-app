import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';

const Home = () => {
	return (
		<>
			<Htag tag="h1">Hello</Htag>
			<Button appearance='primary'>button</Button>
			<Button appearance='ghost'>button</Button>
		</>
	);
};

export default Home;
