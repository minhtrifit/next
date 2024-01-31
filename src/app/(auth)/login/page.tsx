import { handleGithubLogin, getUserSession } from "@/lib/action";
import { redirect } from "next/navigation";

import LoginEmailForm from "@/components/LoginEmailForm";

const LoginPage = async () => {
  const session = await getUserSession();

  // if (session?.user) {
  //   redirect("/dashboard");
  // }

  return (
    <div className="flex flex-col gap-5">
      <h1>Login to app</h1>
      <LoginEmailForm />
      <p>Social media login</p>
      <form action={handleGithubLogin}>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Login with Github
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
