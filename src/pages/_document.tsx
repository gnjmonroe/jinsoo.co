import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='description'
					content='I am a freelance frontend designer/developer based in Seoul.'
				/>

				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					as='style'
					crossOrigin=''
					href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
