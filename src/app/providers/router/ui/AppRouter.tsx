import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "../lib/routeConfig";


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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          {routeConfigNode}
      </Routes>
    </Suspense>
  )
}