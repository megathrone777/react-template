import { data, redirect, type ActionFunction } from "react-router";

import { getUser } from "./helpers";

export const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = `${formData.get("username")}`.trim();
  const password = `${formData.get("password")}`.trim();
  const user = await getUser("username", username);

  if (!user) {
    return data<TActionData>({
      message: `User "${username}" not found.`,
      name: "username",
    });
  }

  if (user.password.toLowerCase() !== password.toLowerCase()) {
    return data<TActionData>({
      message: "Wrong password",
      name: "password",
    });
  }

  localStorage.setItem("user", JSON.stringify(user));
  throw redirect("/dashboard");
};
