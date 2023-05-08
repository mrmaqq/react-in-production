import { RouteProps } from 'react-router-dom';

import { MainPage, AboutPage } from 'pages';
import { AppRoutes, RoutePath } from 'shared/constants';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
};
