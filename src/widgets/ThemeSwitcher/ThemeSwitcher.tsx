import { useMemo } from 'react';

import { Theme } from 'shared/lib/ThemeContext';

import { Button, ThemeButton } from 'shared/ui';
import { useTheme } from 'shared/lib';
import { classNames } from 'shared/lib/classNames';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const iconNode = useMemo(() => {
        if (theme === Theme.DARK) {
            return <DarkIcon />;
        }
        return <LightIcon />;
    }, [theme]);

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {iconNode}
        </Button>
    );
};
