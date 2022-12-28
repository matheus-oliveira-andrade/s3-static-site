import Link from "next/link";
import LayoutPosts from "../../components/layout-posts/layout-posts";

export default function FirstPost() {
  return (
    <LayoutPosts>
      <Link href="/" className="backToHome">Back to home</Link>

      <h1>Post 123</h1>
    </LayoutPosts>
  );
}
