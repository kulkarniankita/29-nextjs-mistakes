"use server";

import { redirect } from "next/navigation";

const signup = async (email: string, password: string) => {
  // Implement sign up logic to create a new user
  if (email === "test@test.com" && password === "test") {
    return true;
  }
  return false;
};

export async function signupAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = await signup(email as string, password as string);

  if (user) {
    return {
      success: true,
      message: "Sign up successful",
    };
  } else {
    return {
      success: false,
      error: "Invalid email or password",
    };
  }
}
