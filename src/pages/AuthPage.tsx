import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hook/input";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { register, login } from "../store/actions/authAction";

export const AuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const username = useInput("");
  const password = useInput("");

  const isFormValid = () => username.value && password.value;

  const loginHandler = () => {
    if (isFormValid()) {
      dispatch(
        login({ username: username.value, password: password.value })
      ).then(() => navigate("/"));
    }
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(
        register({ username: username.value, password: password.value })
      ).then(() => navigate("/"));
    }
  };

  return (
    <div className="container mx-auto max-w-[500px] pt-8">
      <form onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="username">Username</label>
          <input
            {...username}
            id="username"
            type="text"
            placeholder="Type your username"
            className="m-4"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            {...password}
            id="password"
            type="password"
            placeholder="Type your password"
            className="m-4"
          />
        </div>

        <button
          className=" bg-blue-300 p-2 rounded-md mr-3 "
          onClick={loginHandler}
          type="button"
        >
          Login
        </button>

        <button className=" bg-teal-300 p-2 rounded-md mr-3 ">Register</button>
      </form>
    </div>
  );
};
