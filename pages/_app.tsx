import {useEffect, useState} from 'react';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

import {Layout} from '../components';

import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
