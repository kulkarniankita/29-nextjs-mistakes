import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export default function Mistake1Page() {
  // server getting data
  return (
    <div>
      <h1>Marking Page.tsx as a Client Component</h1>
      <p className="text-muted-foreground mt-2">
        The rule of using Server and Client components is that if you mark the
        root page a client component, the entire tree is then rendered on the
        rendered on the client i.e. the browser which means you lose all the
        performance benefits of Server Components
      </p>

      <div className="flex gap-4 my-12">
        <Card>
          <CardHeader>
            <CardTitle>Hello Next.js</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a card component.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
