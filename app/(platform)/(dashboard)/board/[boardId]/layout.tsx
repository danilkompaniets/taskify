import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import BoardNavbar from "./_components/BoardNavbar";
import Navbar from "../../_components/Navbar";

export async function generateMetadata({
  params,
}: {
  params: { boardId: string };
}) {
  const { orgId } = auth();
  if (!orgId) {
    return {
      title: "Board",
    };
  }
  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId,
    },
  });
}

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const board = await db.board.findUnique({
    where: { id: params.boardId, orgId },
  });
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: `url(${board?.imageFullUrl})`,
      }}
    >
      <Navbar />
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/30" />
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
};

export default layout;
