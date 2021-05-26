import React, { Suspense } from "react";
import { Switch } from "react-router";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoate from "../../routes/PublicRoute";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          {mainRoutes.map((item) =>
            item.private ? (
              <PrivateRoute {...item} key={item.path} />
            ) : (
              <PublicRoate {...item} key={item.path} />
            )
          )}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
