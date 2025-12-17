import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo({
  mistakes,
}: {
  mistakes: { id: number; content: React.ReactNode }[];
}) {
  return (
    <div className="flex w-full gap-6">
      <Tabs
        defaultValue="1"
        orientation="vertical"
        className="flex flex-row gap-6"
      >
        <TabsList className="flex flex-col h-auto items-stretch gap-4 bg-transparent">
          {mistakes.map((mistake, idx) => (
            <TabsTrigger
              key={mistake.id}
              value={mistake.id.toString()}
              className="justify-start text-lg px-4 py-2 border-primary hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 data-[state=active]:bg-primary/10 data-[state=active]:text-primary hover:cursor-pointer"
            >
              Mistake {idx + 1}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1">
          {mistakes.map(({ id, content }) => (
            <TabsContent
              key={id}
              value={id.toString()}
              className="p-4 border-secondary/10 border-2 rounded-md max-w-7xl"
            >
              {content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
