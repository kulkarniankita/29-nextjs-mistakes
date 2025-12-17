import { ApiClient } from "@/components/api-client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Mistake20Page() {
  return (
    <div>
      <h1>Using Environment Variables in Client Components</h1>
      <p className="text-muted-foreground mt-2">
        Only NEXT_PUBLIC_ vars are exposed — anything else breaks or leaks. Move
        env usage to Server Components and pass the public information as props
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <Card className="border border-pink-500">
          <CardHeader>
            <CardTitle>Server Component</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="font-bold">API URL: {process.env.API_URL}</p>

            <p className="text-muted-foreground">
              Accessing environment variables in a Server Component is safe and
              will work as expected.
            </p>

            <p className="font-bold">
              {" "}
              Next Public API URL: {process.env.NEXT_PUBLIC_API_URL}
            </p>
            <p className="text-muted-foreground">
              Accessing environment variables in a Server Component is safe and
              will work as expected.
            </p>
          </CardContent>
        </Card>
        <Card className="border border-green-500">
          <CardHeader>
            <CardTitle>Client Component</CardTitle>
          </CardHeader>
          <CardContent>
            <ApiClient />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
