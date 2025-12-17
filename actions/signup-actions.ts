"use server";

const signup = async (email: string, password: string) => {
  // Implement sign up logic to create a new user
  console.log(email, password);
};

export async function signupAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // if (!email || !password) {
  //   return {
  //     error: "Email and password are required",
  //   };
  // }

  await signup(email as string, password as string);

  // Implement sign up logic

  // return {
  //   message: "Sign up successful",
  //   email,
  //   password,
  // };
}
