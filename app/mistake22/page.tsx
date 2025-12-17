export const metadata = {
  title: "Mistake 22",
  description: "Using Dynamic Functions in Metadata",
};

export default function Mistake22Page() {
  return (
    <div>
      <h1>Using Dynamic Functions in Metadata</h1>
      <p className="text-muted-foreground mt-2">
        Metadata must be static unless you explicitly mark the route dynamic.
        Use generateMetadata() for dynamic metadata or mark route dynamic
      </p>
      <div className="flex gap-4 my-12 flex-col"></div>
    </div>
  );
}
