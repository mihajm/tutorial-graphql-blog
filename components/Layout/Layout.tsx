import React, {ReactChild, ReactChildren} from 'react';
import {Header} from '../';

const Layout = ({children}: LayoutProps) => (
	<>
		<Header />
		{children}
	</>
);

type LayoutProps = {
    children: ReactChild | ReactChildren;
}

export default Layout;
