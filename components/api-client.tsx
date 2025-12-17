"use client";

export function ApiClient() {
  const env = process.env.API_URL;
  return (
    <div className="space-y-2">
      <p className="font-bold">API URL: {env}</p>
      <p className="text-muted-foreground">
        Accessing environment variables in a Client Component is not safe and
        will break or leak information.
      </p>
      <p className="font-bold">
        Next Public API URL: {process.env.NEXT_PUBLIC_API_URL}
      </p>
      <p className="text-muted-foreground">
        Accessing environment variables in a Server Component is safe and will
        work as expected.
      </p>
    </div>
  );
}
