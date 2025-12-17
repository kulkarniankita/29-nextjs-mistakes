export const TimeDisplay = ({ isoString }: { isoString: string }) => {
  const date = new Date(isoString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const time = isoString.split("T")[1].split(".")[0];

  return (
    <div className="flex gap-2 flex-wrap">
      <div className="bg-muted px-3 py-2 rounded text-center">
        <p className="text-xs text-muted-foreground">Year</p>
        <p className="font-mono font-bold">{year}</p>
      </div>
      <div className="bg-muted px-3 py-2 rounded text-center">
        <p className="text-xs text-muted-foreground">Month</p>
        <p className="font-mono font-bold">{month}</p>
      </div>
      <div className="bg-muted px-3 py-2 rounded text-center">
        <p className="text-xs text-muted-foreground">Day</p>
        <p className="font-mono font-bold">{day}</p>
      </div>
      <div className="bg-muted px-3 py-2 rounded text-center">
        <p className="text-xs text-muted-foreground">Time</p>
        <p className="font-mono font-bold">{time}</p>
      </div>
    </div>
  );
};
