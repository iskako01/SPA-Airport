import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex justify-between px-5 h-[50px] bg-slate-400  items-center ">
      <h2>
        <Link to={"/"}>Airport</Link>
      </h2>
      <Link to={"/auth"}>Auth</Link>
    </nav>
  );
};
