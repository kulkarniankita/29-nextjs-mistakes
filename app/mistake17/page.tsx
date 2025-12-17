export default function Mistake17Page() {
  return (
    <div>
      <h1>Not Resolving Hydration Errors Correctly</h1>
      <p className="text-muted-foreground mt-2">
        We&apos;ve all seen these hydration errors which mainly occur as the
        same code that renders on the client renders on the server. If you
        don&apos;t want that, use this hook to prevent it from rendering on the
        server
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <p>
          <div className="bg-pink-200 p-4 rounded-md">
            <h2>Hello Next.js</h2>
          </div>
        </p>
      </div>
    </div>
  );
}
