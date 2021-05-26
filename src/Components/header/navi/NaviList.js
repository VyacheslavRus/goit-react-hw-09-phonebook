import React from "react";
import { connect, useSelector } from "react-redux";
import { NavLink, useLocation, withRouter } from "react-router-dom";
import { authSelector } from "../../../redux/auth/authSelectors";
import { mainRoutes } from "../../../routes/mainRoutes";
import NavListItem from "./NaviListItem";
import { NavListStyled } from "./NavListStyled";
import UserInfo from "./UserInfo";

const NavList = () => {
  return (
    <NavListStyled>
      <div>
        <NavLink
          exact
          className="classNeActiv"
          activeClassName="classActive"
          to="/"
        >
          Home
        </NavLink>
      </div>
      <ul>
        {mainRoutes.map((item) => (
          <NavListItem item={item} key={item.path} />
        ))}
        <UserInfo />
      </ul>
    </NavListStyled>
  );
};

export default NavList;
