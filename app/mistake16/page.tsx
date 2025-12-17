import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
export default function Mistake16Page() {
  return (
    <div>
      <h1>Caching the same data twice</h1>
      <p className="text-muted-foreground mt-2">
        Your metadata and page needs the same content, cache it and reuse it
      </p>
      <div className="flex gap-4 my-12 flex-col">
        {new Array(4).fill(0).map((_, idx) => (
          <Link
            key={idx}
            href={`/mistake16/product${idx + 1}`}
            className="text-primary underline underline-offset-4 inline-flex items-center gap-2"
          >
            <ArrowRightIcon className="size-4" /> Product ${idx + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
