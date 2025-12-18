export default function Mistake26Page() {
  return (
    <div>
      <h1>Should this be rendered on the Server or Client?</h1>
      <p className="text-muted-foreground mt-2">
        If the data is static and doesn&apos;t change, it should be rendered on
        the Server. If the data is dynamic and changes frequently, it should be
        rendered on the Client.
      </p>
      <div className="flex gap-4 my-12 flex-col"></div>
    </div>
  );
}
