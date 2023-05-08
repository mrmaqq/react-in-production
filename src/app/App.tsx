import { Suspense } from 'react';

import { AppRouter } from 'app/providers/router';

import { Navbar, Sidebar } from 'widgets';

import { classNames, useTheme } from 'shared/lib';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
