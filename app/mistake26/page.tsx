export default function Mistake26Page() {
  return (
    <div>
      <h1>
        Placing Suspense inside the async component instead of wrapping it
      </h1>
      <p className="text-muted-foreground mt-2">
        Wrapping await logic with Suspense inside the async child. But Suspense
        needs to be above the suspending boundary. Put &lt;Suspense
        fallback=&#123;...&#125;&gt; around the async Server Component from a
        parent (often page.tsx)
      </p>
      <div className="flex gap-4 my-12 flex-col"></div>
    </div>
  );
}

