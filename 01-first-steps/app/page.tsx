import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 pt-10">
      <span className="font-inter">Hola Mundo</span>
      <Link href="/about">
        <span className="block ">AboutPage</span>
      </Link>
    </main>
  );
}
