import { handleGithubLogin, getUserSession } from "@/lib/action";

const LoginPage = async () => {
  const session = await getUserSession();

  return (
    <div>
      <h1>Login to app</h1>
      <form action={handleGithubLogin}>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Login with Github
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
