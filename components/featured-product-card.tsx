import { ProductType } from "@/types/products";
import { Card, CardContent, CardTitle } from "./ui/card";

export function FeaturedProductCard({
  products,
  cachedAt,
}: {
  products: ProductType[];
  cachedAt: string;
}) {
  return (
    <Card className="p-4">
      <CardTitle className="text-lg">🛍️ Featured Products</CardTitle>
      <CardContent>
        <ul className="space-y-2">
          {products.map(({ id, name, price }) => (
            <li key={id} className="flex justify-between text-sm">
              {name}
              <span className="font-medium">
                ${parseFloat(price).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground mt-3">
          Cached at: {new Date(cachedAt).toLocaleTimeString()}
        </p>
      </CardContent>
    </Card>
  );
}
