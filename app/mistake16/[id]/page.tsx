import { Card, CardTitle } from "@/components/ui/card";
import { getProductById } from "@/lib/cart";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) {
    return {
      title: "Product not found",
      description: "Product not found",
    };
  }
  return {
    title: `${product.name}`,
    description: `${product.description}`,
  };
};

export default async function Mistake16Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Product not found",
      description: "Product not found",
    };
  }
  const { name, description, price, quantity } = product;
  return (
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
  );
}
