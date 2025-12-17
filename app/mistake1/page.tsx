import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export default function Mistake1Page() {
  return (
    <div>
      <h1>Marking Page.tsx as a Client Component</h1>

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
