import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PageRoutes } from "../../routes/routes";
import GlobalStyles from "../../app.styled";

const Wrapper = () => {
  const routes = React.useMemo(
    () =>
      Object.keys(PageRoutes).map((routeName) => {
        const Component = PageRoutes[routeName].Component;
        return (
          <Route
            key={routeName}
            exact
            {...PageRoutes[routeName].route}
            path={PageRoutes[routeName].route}
          >
            <Component />
          </Route>
        );
      }),
    []
  );

  return (
    <>
      <GlobalStyles />
      <Router>
        <Suspense fallback={null}>
          <Switch>
            {routes}
            <Route>
              <Redirect to={PageRoutes.MainPage.route} />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default Wrapper;
