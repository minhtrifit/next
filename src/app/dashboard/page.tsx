import { handleSignOut, getUserSession } from "@/lib/action";

const DashboardPage = async () => {
  const session = await getUserSession();

  console.log(session);

  return (
    <div>
      <p>Dashboard</p>
      <p>Hello {session?.user?.name}</p>
      <form action={handleSignOut}>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Logout
        </button>
      </form>
    </div>
  );
};

export default DashboardPage;
