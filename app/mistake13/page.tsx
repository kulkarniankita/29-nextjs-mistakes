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
      <p className="text-muted-foreground mt-2">
        redirect() works by throwing a special error. If it&apos;s inside try
        and the catch block runs, you swallow the redirect and nothing happens.
        Call redirect() either outside try/catch, or re-throw inside catch when
        appropriate
      </p>

      <form action={redirectToHomeAction} className="flex flex-col gap-2 my-12">
        <Button type="submit">Redirect to Home</Button>
      </form>
    </div>
  );
}
