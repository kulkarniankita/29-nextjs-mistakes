import { CreateProductForm } from "@/components/mistakes/mistake24-demo";
import { Card } from "@/components/ui/card";

export default function Mistake25Page() {
  return (
    <div>
      <h1>Redirect inside try catch</h1>
      <p className="text-muted-foreground mt-2">
        redirect() works by throwing a special error. If it&apos;s inside try
        and the catch block runs, you swallow the redirect and nothing happens.
        Call redirect() either outside try/catch, or re-throw inside catch when
        appropriate
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
