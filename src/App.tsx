import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";

import './styles/index.scss';
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Routes>
          <Route path="/about" element={
          <Suspense fallback={<div>Loading...</div>}>
            <AboutPageLazy />
          </Suspense>
          }/>
          <Route path="/" element={
            <Suspense fallback={<div>Loading...</div>}>
              <MainPageLazy />
            </Suspense>
          }/>
      </Routes>
    </div>
  )
}

export default App;