import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
  keywords: ["About Page", "iL4y", "information"],
};

export default function AboutPage() {
  return (
    <main className="">
      <span className="text-7xl">About Page</span>
    </main>
  );
}
