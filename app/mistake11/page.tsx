import { signupAction } from "@/actions/signup-actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Mistake11Page() {
  return (
    <div>
      <h1>Adding “use client” unnecessarily</h1>
      <p className="text-muted-foreground mt-2">
        Server Actions are not allowed inside Server Components.
      </p>

      <form action={signupAction} className="flex flex-col gap-2 my-12">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}
