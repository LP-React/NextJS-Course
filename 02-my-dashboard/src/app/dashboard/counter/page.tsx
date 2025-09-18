import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'Counter Page'
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="font-medium text-2xl">Productos en el carrito</span>
      <CartCounter value={20}/>
    </div>
  );
}
