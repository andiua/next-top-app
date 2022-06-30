import CourseIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ServicesIcon from './icons/services.svg';
import ProductIcon from './icons/product.svg';
import { FirstLevelMenuItem } from './../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Courses',
		icon: <CourseIcon />,
		id: TopLevelCategory.Courses,
	},
	{
		route: 'services',
		name: 'Services',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Servises,
	},
	{
		route: 'books',
		name: 'Books',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books,
	},
	{
		route: 'products',
		name: 'Products',
		icon: <ProductIcon />,
		id: TopLevelCategory.Products,
	},
];

export const priceUa = (price: number): string =>
	price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
