import React from "react";
import { NavLink } from "react-router";

import { LoginForm } from "./components";

const pageTitle: string = "Login";

const LoginPage: React.FC = () => (
  <>
    <title>{`${pageTitle}`}</title>
    <h1>{pageTitle}</h1>
    <LoginForm />
    <NavLink to="/auth/registration">Don't have an account?</NavLink>
  </>
);

export { LoginPage };
