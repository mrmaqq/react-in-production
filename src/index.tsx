import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import App from './app/App';

render(
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.querySelector('#root'),
);
