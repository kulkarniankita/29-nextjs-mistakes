import KeyInsights from "@/components/key-insights";
import {
  InteractiveDemo,
  ServerComponentAttempt,
} from "@/components/mistakes/mistake14-interactive-demo";

export default function Mistake14Page() {
  return (
    <div>
      <h1>Wanting to make everything a server component</h1>
      <p className="text-muted-foreground mt-2">
        Not all pages need to be server components. Some pages are better as
        client components—especially those with heavy interactivity.
      </p>

      <div className="flex gap-8 my-12 flex-col lg:flex-row">
        {/* The RIGHT way - using a client component */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 text-xl">✓</span>
            <h2 className="text-lg font-semibold">Client Component (Good)</h2>
          </div>
          <p className="text-sm text-zinc-400">
            Click the box, change colors, toggle auto-increment. All instant,
            all smooth—no server roundtrips needed.
          </p>
          <InteractiveDemo />
        </div>

        {/* The WRONG way - forcing server component */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-red-400 text-xl">✗</span>
            <h2 className="text-lg font-semibold">
              Forcing Server Component (Bad)
            </h2>
          </div>
          <p className="text-sm">
            Without client state, every interaction would need a server
            roundtrip, causing lag and poor UX.
          </p>
          <ServerComponentAttempt />
        </div>
      </div>

      {/* Key insights */}
      <KeyInsights
        title="When to use Client Components:"
        items={[
          {
            title: "Interactive UIs",
            description: "counters, games, drawing tools, drag & drop",
          },
          {
            title: "Real-time features",
            description: "live updates, typing indicators, animations",
          },
          {
            title: "Browser APIs",
            description: "localStorage, geolocation, camera access",
          },
          {
            title: "Complex forms",
            description: "validation, auto-save, field dependencies",
          },
        ]}
      />
    </div>
  );
}
