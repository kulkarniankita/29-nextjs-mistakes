import { Button } from "@/components/ui/button";

export default function Mistake29Page() {
  return (
    <div>
      <h1>Executing Mutations in Server Components</h1>
      <p className="text-muted-foreground mt-2">
        Mutations are not allowed inside Server Components. Instead, use server
        actions to execute mutations. They are not allowed because they can
        cause race conditions
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <form
          action={async () => {
            "use server";
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }}
        >
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
