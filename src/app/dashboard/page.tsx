import { handleSignOut, getUserSession } from "@/lib/action";
import { getAllPosts } from "@/lib/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

const DashboardPage = async () => {
  const session = await getUserSession();
  const posts = await getAllPosts();

  //   if (!session?.user) {
  //     redirect("/login");
  //   }

  return (
    <div>
      <p>Dashboard</p>

      <p>Hello {session?.user?.name}</p>

      <form action={handleSignOut}>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Logout
        </button>
      </form>

      <div className="flex flex-col gap-5 my-5">
        <p className="text-xl text-red-500 font-bold">Post lists</p>
        <Suspense fallback={<Loading />}>
          {posts.map((post: any) => {
            return (
              <div key={post.id}>
                <p className="font-bold">Title: {post.title}</p>
                <p>{post.body}</p>
              </div>
            );
          })}
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardPage;
