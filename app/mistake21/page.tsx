import { Card } from "@/components/ui/card";

const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  if (products.length > 0) {
    throw new Error("No products found");
  }
  return products;
};

export default async function Mistake21Page() {
  const products = await getProducts();

  return (
    <div>
      <h1>Not Using loading.tsx AND error.tsx Together</h1>
      <p className="text-muted-foreground mt-2">
        Developers add loading.tsx but skip error.tsx. Result: stuck UIs,
        cryptic white screens, no retry behavior. Always pair loading.tsx +
        error.tsx for robust UX
      </p>
      <div className="flex gap-4 my-12 flex-col">
        {products.map(
          (product: {
            id: string;
            title: string;
            description: string;
            price: number;
          }) => (
            <Card key={product.id} className="p-4">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
