import {useMemo} from "react";

import {Theme} from "shared/lib/ThemeContext";

import {Button, ThemeButton} from "shared/ui";
import {useTheme} from "shared/lib";
import {classNames} from "shared/lib/classNames";

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const iconNode = useMemo(() => {
    if (theme === Theme.LIGHT) {
      return <LightIcon />
    }
    if (theme === Theme.DARK) {
      return <DarkIcon />
    }
  },[theme])

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {iconNode}
    </Button>
  )
}