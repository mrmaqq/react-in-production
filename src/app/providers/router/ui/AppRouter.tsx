import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets';
import { routeConfig } from '../lib/routeConfig';

export const AppRouter = () => {
    const routeConfigNode = useMemo(() => Object.values(routeConfig)
        .map(({ path, element }) => (
            <Route
                key={path}
                element={(
                    <div className="page-wrapper">{element}</div>
                )}
                path={path}
            />
        )), []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfigNode}
            </Routes>
        </Suspense>
    );
};
