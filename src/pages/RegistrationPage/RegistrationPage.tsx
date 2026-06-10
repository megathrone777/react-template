import React from "react";
import { NavLink } from "react-router";

const pageTitle: string = "Registration";

const RegistrationPage: React.FC = () => {
  return (
    <>
      <title>{`${pageTitle}`}</title>

      <div>
        <h1>{pageTitle}</h1>

        <form>
          <input
            name="username"
            type="text"
          />

          <input
            name="email"
            type="email"
          />

          <input
            name="password"
            type="password"
          />

          <input
            name="password-repeat"
            type="password"
          />

          <button type="submit">Register</button>
          <NavLink to="/auth/login">Already have an account?</NavLink>
        </form>
      </div>
    </>
  );
};

export { RegistrationPage };
