"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createProductAction } from "@/actions/mistake24-actions";
import { useActionState } from "react";
import { Loader2 } from "lucide-react";

export function CreateProductForm() {
  const [state, formAction, isPending] = useActionState(createProductAction, {
    success: false,
    message: "",
    error: null,
  });

  return (
    <form
      action={formAction}
      className="flex flex-col gap-2 w-3/4 mx-auto space-y-4"
    >
      <Input name="name" placeholder="Product name" required />
      <Input name="price" type="number" placeholder="Price" required />
      <Input name="description" placeholder="Description" />
      <Button type="submit">
        {isPending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          "🦄 Create Product"
        )}
      </Button>

      {state.message && <p className="text-green-700">🎉 {state.message}</p>}

      {state.error && <p className="text-red-700"> {state.error}</p>}
    </form>
  );
}
