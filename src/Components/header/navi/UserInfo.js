import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/authActions";
import {
  authDisplayName,
  authSelector,
} from "../../../redux/auth/authSelectors";

const UserInfo = () => {
  const displayName = useSelector((state) => authDisplayName(state));
  const auth = useSelector((state) => authSelector(state));
  const dispatch = useDispatch();
  const signOut = () => dispatch(logOut());

  return auth ? (
    <>
      <div>
        <strong>{displayName}</strong>
        <button type="button" onClick={signOut}>
          Log Out
        </button>
      </div>
    </>
  ) : null;
};

export default UserInfo;
