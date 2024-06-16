import { useUser } from "@clerk/clerk-react";

export const useUserEmail = () => {
  const { user } = useUser();

  if (!user || !user.emailAddresses) {
    return null;
  }

  const gmailEmail = user.emailAddresses.find((emailObj) =>
    emailObj.emailAddress.endsWith("@gmail.com")
  );

  return gmailEmail ? gmailEmail.emailAddress : null;
};
