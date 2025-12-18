import { Card, CardHeader, CardTitle } from "../ui/card";

export default function Mistake1() {
  return (
    <div>
      <h1>Making the Page.tsx a Client component</h1>
      <p className="text-muted-foreground mt-2">
        Page.tsx should be a server component. If you need to use client
        components, you should mark the page as a client component.
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <Card>
          <CardHeader>
            <CardTitle>Hello Next.js</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
