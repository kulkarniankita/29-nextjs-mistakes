import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Mistake13Page() {
  const redirectToHomeAction = async () => {
    "use server";
    try {
      redirect("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Redirecting inside “try/catch” block</h1>

      <form action={redirectToHomeAction} className="flex flex-col gap-2 my-12">
        <Button type="submit">Redirect to Home</Button>
      </form>
    </div>
  );
}
