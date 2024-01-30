"use server";

import { auth, signIn, signOut } from "@/lib/auth";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const getUserSession = async () => {
  const session = await auth();
  return session;
};

export const handleSignOut = async () => {
  await signOut();
};
