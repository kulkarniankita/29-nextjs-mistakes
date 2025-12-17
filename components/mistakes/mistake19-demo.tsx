import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getProductsCached } from "@/lib/mistake19-data";
import { ProductType } from "@/types/products";

export async function ProductGrid() {
  const { products, fetchedAt } = await getProductsCached();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map(({ id, name, formattedPrice }: ProductType) => (
          <Card key={id} className="p-4">
            <CardTitle className="text-base">{name}</CardTitle>
            <CardContent className="pt-2">
              <p className="text-lg font-bold text-primary">{formattedPrice}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Data fetched: {new Date(fetchedAt).toLocaleTimeString()}
      </p>
    </div>
  );
}

export async function ProductStats() {
  const { products, fetchedAt } = await getProductsCached();

  const totalValue = products.reduce(
    (sum: number, p: ProductType) => sum + parseFloat(p.price),
    0
  );
  const avgPrice = totalValue / products.length;

  return (
    <Card className="p-4">
      <CardTitle className="text-lg">Store Statistics</CardTitle>
      <CardContent className="pt-4 space-y-2">
        {["Total Products", "Average Price", "Total Inventory Value"].map(
          (title) => (
            <div className="flex justify-between" key={title}>
              <span className="text-sm">{title}</span>
              <span className="font-semibold">
                {title === "Total Products"
                  ? products.length
                  : title === "Average Price"
                  ? avgPrice.toFixed(2)
                  : totalValue.toFixed(2)}
              </span>
            </div>
          )
        )}
      </CardContent>
      <p className="text-xs text-muted-foreground mt-4">
        Data fetched: {new Date(fetchedAt).toLocaleTimeString()}
      </p>
    </Card>
  );
}
