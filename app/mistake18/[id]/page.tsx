import { Card, CardTitle } from "@/components/ui/card";
import { getCart, getProductById } from "@/lib/cart";
import { ArrowLeftIcon } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Mistake16Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return notFound();
  }
  const { name, description, price, quantity } = product;
  const cart = await getCart();

  return (
    <div className="flex gap-8">
      <aside className="w-48 border-r pr-4">
        <h3 className="font-semibold mb-4">Products</h3>
        <ul className="space-y-2">
          {cart.items.map(({ id, name }) => (
            <li key={id}>
              <Link
                href={`/mistake18/${id}`}
                className="text-sm hover:underline"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1">
        <div className="space-y-4">
          <Link
            href="/mistake16"
            className="text-primary underline underline-offset-4 inline-flex items-center gap-2"
          >
            <ArrowLeftIcon className="size-4" /> Back to Products
          </Link>
          <Card className="px-4">
            <CardTitle>{name}</CardTitle>
            <p className="text-muted-foreground mt-2">{description}</p>
            <div className="flex gap-4 flex-col">
              <p>Price: ${price}</p>
              <p>Quantity: {quantity}</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
