import { Suspense } from "react";
import BlogList from "./components/BlogList";

export default async function Home() {
  return (
    <div className="p-2 lg:max-w-[1000px] m-auto md:max-w-[800px] sm:max-w-[600px] max-[600px]:mx-5  max-[300px]:w-[100%]">
      <Suspense fallback={"Loading..."}>
        <BlogList />
      </Suspense>
    </div>
  );
}
