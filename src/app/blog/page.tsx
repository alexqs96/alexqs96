import BlogPage from "@/components/Blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function Blogs() {
  return <BlogPage />;
}
