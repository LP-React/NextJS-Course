import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This is a page with prices",
};

export default function Pricingpage() {
  return (
    <main>
      <span className="text-7xl">Pricing Page</span>
    </main>
  );
}
