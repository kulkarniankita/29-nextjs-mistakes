const getData = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  return url;
};

export default function Mistake10Page() {
  const data = getData();
  return (
    <div>
      <h1>
        Using &quot;window&quot; or client handlers inside a Server component
      </h1>
      <p className="text-muted-foreground mt-2"></p>
      <div className="flex gap-4 my-12 flex-col">
        <p>URL:{data}</p>
      </div>
    </div>
  );
}
