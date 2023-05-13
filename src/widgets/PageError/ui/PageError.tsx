import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Что-то пошло не так')}</h1>
            <Button onClick={reload}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
};
