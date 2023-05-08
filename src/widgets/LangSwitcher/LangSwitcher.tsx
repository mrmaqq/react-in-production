import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui';
import { classNames } from 'shared/lib/classNames';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const handleTranslate = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={handleTranslate}
        >
            {t('Язык')}
        </Button>
    );
};
