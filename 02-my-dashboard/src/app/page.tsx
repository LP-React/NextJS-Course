import { redirect } from "next/navigation";

export default function Home() {

  redirect('/dashboard/main');

  return (
    <div className="font-inter">
        HOLAAAAAAAA
    </div>
  );
}
