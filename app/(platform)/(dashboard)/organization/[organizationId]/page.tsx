import { db } from "@/lib/db";
import Info from "./_components/Info";
import { Separator } from "@/components/ui/separator";
import BoardList from "./_components/BoardList";
import { Suspense } from "react";

const page = async () => {
  return (
    <div className="flex flex-col w-full space-y-4">
      <Info />
      <Separator />
      <div className="my-4">
        <div className="px-2 md:px-4">
          <Suspense fallback={<BoardList.Skeleton />}>
            <BoardList />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
