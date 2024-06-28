import { z } from "zod";
import { Card } from "@prisma/client";

import { ActionState } from "@/lib/createSafeAction";

import { UpdateCard } from "./schema";
import { imageOptimizer } from "next/dist/server/image-optimizer";

export type InputType = z.infer<typeof UpdateCard>;
export type ReturnType = ActionState<InputType, Card>;
