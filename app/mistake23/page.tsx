import {
  UserInfoUncached,
  UserInfoCached,
} from "@/components/mistakes/mistake23-demo";

export default function Mistake23Page() {
  return (
    <div>
      <h1>Not using cache() function for request memoization</h1>
      <p className="text-muted-foreground mt-2">
        The cache() function is used to memoize requests. This is important for
        performance as it allows you to avoid making the same request multiple
        times within the same render.
      </p>
      <div className="flex gap-6 my-12 flex-col lg:flex-row">
        <div className="flex-1">
          <UserInfoUncached />
        </div>
        <div className="flex-1">
          <UserInfoCached />
        </div>
      </div>
    </div>
  );
}
