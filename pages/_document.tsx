import { Head, Html, Main, NextScript } from 'next/document';

// import Document, { DocumentContext, DocumentInitialProps, Html, Main, Head, NextScript } from 'next/document';

export default function Document(): JSX.Element {
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


// class MyDocument extends Document {

// 	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
// 		const initialProps = await Document.getInitialProps(ctx);
// 			return {...initialProps}
// 	}

// 	render():JSX.Element {
// 		return (
// 			<Html lang="uk">
// 				<Head />
// 				<body>
// 					<Main />
// 					<NextScript />
// 				</body>
// 			</Html>
// 		)
// 	}
// }

// export default MyDocument;