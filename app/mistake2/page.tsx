import { CreateProductForm } from "@/components/mistakes/mistake24-demo";
import { Card } from "@/components/ui/card";

export default function Mistake2Page() {
  return (
    <div>
      <h1>Not protecting Server Actions (no auth, no validation)</h1>
      <p className="text-muted-foreground mt-2">
        Treating Server Actions like internal functions, not like publicly
        callable endpoints. Anyone who can trigger the action can hit it (e.g.
        via dev tools). Add auth checks, input validation, and authorization
        logic inside the action
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <Card className="p-4">
          <h2>🦄 Create Product</h2>
          <CreateProductForm />
        </Card>
      </div>
    </div>
  );
}
