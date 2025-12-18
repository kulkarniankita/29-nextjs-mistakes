import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function markLessonAsCompletedAction(formData: FormData) {
  "use server";
  const lessonId = formData.get("lessonId");

  console.log(lessonId);
}

const getLessonData = async () => {
  return {
    data: {
      lessonId: "1",
      lessonTitle: "How Next.js Works",
      lessonDescription:
        "Learn how Next.js works and how to use it to build your own applications.",
      lessonCompleted: false,
    },
  };
};

export default async function Mistake28Page() {
  const data = await getLessonData();
  return (
    <div>
      <h1>Not Tagging the Cache Correctly</h1>
      <p className="text-muted-foreground mt-2">
        The tag is used to identify the cache and is used to purge the cache. If
        you don&apos;t tag the cache, the cache will be purged when the page is
        rendered.
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <Card>
          <CardHeader>
            <CardTitle>Course Platform</CardTitle>
            <CardDescription>
              <h2 className="text-pink-700">{data.data.lessonTitle}</h2>
              <p className="text-sm text-gray-500">
                {data.data.lessonDescription}
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={markLessonAsCompletedAction}>
              <Button>Mark Lesson as Completed</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
