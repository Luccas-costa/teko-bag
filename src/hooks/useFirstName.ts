import { useUser } from "@clerk/clerk-react";

export const useFirstName = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return user.firstName;
};
