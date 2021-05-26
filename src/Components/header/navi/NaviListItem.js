import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { authSelector } from "../../../redux/auth/authSelectors";
import { NavListItemStyled } from "./NavListItemStyled";

const NavListItem = ({ item }) => {
  const location = useLocation();
  const auth = useSelector((state) => authSelector(state));

  return (
    <NavListItemStyled>
      {!item.private && !item.restricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="classNeActiv"
            activeClassName="classActive"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {auth && item.private && !item.restricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="classNeActiv"
            activeClassName="classActive"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {!auth && !item.private && item.restricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="classNeActiv"
            activeClassName="classActive"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
    </NavListItemStyled>
  );
};

export default NavListItem;
