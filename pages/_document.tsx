import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="uk">
			<Head />
			<link
				href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
				rel="stylesheet"></link>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
