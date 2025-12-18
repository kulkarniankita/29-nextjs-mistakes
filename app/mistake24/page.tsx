"use client";
import { signupAction } from "@/actions/signup-actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Mistake24Page() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const result = await signupAction(formData);
    if (result.success) {
      router.push("/");
    } else {
      //show error message
    }
  };

  return (
    <div>
      <h1>Mixing up redirect vs router.push</h1>
      <p className="text-muted-foreground mt-2">
        redirect() works by throwing a special error. If it&apos;s inside try
        and the catch block runs, you swallow the redirect and nothing happens.
        Call redirect() either outside try/catch, or re-throw inside catch when
        appropriate
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <form className="flex flex-col gap-2 my-12" onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    </div>
  );
}
