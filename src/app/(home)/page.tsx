import BlogList from "./components/BlogList";

export default async function Home() {
  //Data fetching
  const response = await fetch(`${process.env.BACKEND_URL}/blogs`);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the blogs");
  }

  const blogs = await response.json();
  console.log(blogs);

  return (
    <div className="max-w-[1336px] m-auto">
      <div className="pt-14"></div>
      <BlogList blogs={blogs} />
    </div>
  );
}
