import React, { Suspense } from "react";
import { connect, useSelector } from "react-redux";
import { Switch } from "react-router";
import { authSelector } from "../../redux/auth/authSelectors";
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
