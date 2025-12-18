import Image from "next/image";

export default function Mistake27Page() {
  return (
    <div>
      <h1>Images should have sizes prop</h1>
      <p className="text-muted-foreground mt-2">
        The sizes prop is used to specify the size of the image in the browser.
        This is important for performance as it allows the browser to load the
        image at the correct size.
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <Image
          src="https://www.nextjscourse.dev/images/og-default.jpg"
          alt="Image"
          width={600}
          height={600}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
