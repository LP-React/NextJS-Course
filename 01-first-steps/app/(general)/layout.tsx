import { NavBar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar/>
      <div className="flex flex-col justify-center items-center py-12">
        <h1 className="my-4">- Hello World -</h1>
        {children}
      </div>
    </>
  );
}
