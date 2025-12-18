import { signupAction } from "@/actions/signup-actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Mistake11Page() {
  return (
    <div>
      <h1>Adding “use client” unnecessarily</h1>
      <p className="text-muted-foreground mt-2">
        Adding &apos;use client&apos; unnecessarily can lead to performance
        issues. It forces the entire tree to be client-side, making it harder
        for Next.js to optimize. Instead, use Server Actions only where
        necessary and keep the rest of the tree server-side.
      </p>

      <form action={signupAction} className="flex flex-col gap-2 my-12">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}
