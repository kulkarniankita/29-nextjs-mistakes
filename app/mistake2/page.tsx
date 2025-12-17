import { signupAction } from "@/actions/signup-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Mistake2() {
  return (
    <div>
      <h1>Not Protecting Server Actions</h1>

      <form action={signupAction} className="flex flex-col gap-2 my-12">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}
