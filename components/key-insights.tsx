import { Card } from "./ui/card";

export default function KeyInsights({
  items,
  title,
}: {
  items: { title: string; description: string }[];
  title: string;
}) {
  return (
    <Card className="mt-8 p-6 rounded-xl">
      <h3 className="font-semibold">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-900">
        {items.map((item) => (
          <li className="flex items-start gap-2" key={item.title}>
            <span className="text-amber-400">→</span>
            <span>
              <strong className="text-primary ">{item.title}</strong>{" "}
              <span className="text-gray-900 dark:text-gray-100">
                {item.description}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
