export default function Mistake23Page() {
  return (
    <div>
      <h1>
        Using window, document, or event handlers in Server Components
      </h1>
      <p className="text-muted-foreground mt-2">
        Trying to use window, document, or onClick handlers in Server
        Components. This forces you to add &apos;use client&apos; and
        accidentally make huge trees client-only. If it needs browser APIs or
        event handlers, make it a Client Component and pass in primitive props
        from the server
      </p>
      <div className="flex gap-4 my-12 flex-col"></div>
    </div>
  );
}

