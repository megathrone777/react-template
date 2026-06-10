import { redirect, type MiddlewareFunction } from "react-router";

import { AuthContext } from "@/context";

const getUser = (): null | TUser => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  return user;
};

export const authMiddleware: MiddlewareFunction = () => {
  const user = getUser();

  if (user) {
    return redirect("/dashboard");
  }
};

export const dashboardMiddleware: MiddlewareFunction = ({ context }) => {
  const user = getUser();

  if (!user) {
    throw redirect("/auth/login");
  }

  context.set(AuthContext, user);
};

export const indexMiddleware: MiddlewareFunction = () => {
  const user = getUser();

  throw redirect(user ? "/dashboard" : "/auth/login");
};

export const logoutMiddleware: MiddlewareFunction = () => {
  localStorage.removeItem("user");
  throw redirect("/auth/login");
};
