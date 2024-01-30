import { handleSignOut, getUserSession } from "@/lib/action";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getUserSession();

  if (!session?.user) {
    redirect("/login");
  }

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
