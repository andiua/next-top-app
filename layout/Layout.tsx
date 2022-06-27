import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import React from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {

	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
};

export default Layout;

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
