import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Mistake18Page() {
  return (
    <div>
      <h1>Not using Layout.tsx Correctly</h1>
      <p className="text-muted-foreground mt-2">
        Layouts are not just html and body wrappers but are persistent data
        shells where you can place data if you don&apos;t want every dynamic
        route or page to render it. Add stuff in Layout that will be common for
        every page such as navigation, sidebar
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <Link
          href="/mistake18/product1"
          className="text-primary underline underline-offset-4 inline-flex items-center gap-2"
        >
          <ArrowRightIcon className="size-4" /> Go to Product 1
        </Link>
      </div>
    </div>
  );
}
