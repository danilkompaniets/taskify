import { Card, List } from "@prisma/client";

export type ListWithCards = List & { cards: Card[] };

export type cardWithList = Card & { list: List };
