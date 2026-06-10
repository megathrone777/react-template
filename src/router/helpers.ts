export const getUser = async (
  field: keyof Pick<TUser, "email" | "username">,
  value: string
): Promise<null | TUser> => {
  const response = await fetch("/users.json");
  const users: Record<TUser["id"], TUser> = await response.json();

  if (response && response.ok && users) {
    return (
      Object.values(users).find(
        (user: TUser) => user[field].toLowerCase() === value.toLowerCase()
      ) ?? null
    );
  }

  return null;
};
