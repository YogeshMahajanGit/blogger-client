// import { Blog } from "@/types";
import BlogList from "./components/BlogList";

export default async function Home() {
  //Data fetching
  const response = await fetch(`${process.env.BACKEND_URL}/blogs`);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the blogs");
  }
  const blogs = await response.json();
  // console.log(blogs);
  return (
    <div className="p-2 lg:max-w-[1000px] m-auto md:max-w-[800px] sm:max-w-[600px] max-[600px]:mx-5  max-[300px]:w-[100%]">
      <BlogList blogs={blogs} />
    </div>
  );
}
