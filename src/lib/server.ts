export const getAllPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Get posts failed", error);
    return error;
  }
};
