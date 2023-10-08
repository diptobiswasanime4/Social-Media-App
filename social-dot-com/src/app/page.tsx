import Card from "@/components/Card";
import LeftNav from "@/components/LeftNav";
import PostFeed from "@/components/PostFeed";
import PostForm from "@/components/PostForm";

export default function Home() {
  return (
    <div className="flex bg-gray-100 px-2 py-4">
      <LeftNav />
      <div className="right-section w-3/4 m-1">
        <PostForm />
        <PostFeed />
      </div>
    </div>
  );
}
