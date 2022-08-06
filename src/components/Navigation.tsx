import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { authSlice } from "../store/slices/authSlice";

export const Navigation = () => {
  const { isAuth, username } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(authSlice.actions.logout());
  };

  return (
    <nav className="flex justify-between px-5 h-[50px] bg-slate-400  items-center ">
      <h2>
        <Link to={"/"}>Airport</Link>
      </h2>

      {!isAuth && <Link to={"/auth"}>Auth</Link>}

      {isAuth && (
        <>
          <span>{username}</span>
          <button onClick={() => logout()}>Logout</button>
        </>
      )}
    </nav>
  );
};
