"use client";

import { Card } from "@prisma/client";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { useCardModal } from "@/hooks/useCardModal";
import { identity } from "lodash";

interface CardItemProps {
  index: number;
  data: Card;
}

const CardItem = ({ data, index }: CardItemProps) => {
  const cardModal = useCardModal();
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          role="button"
          onClick={() => cardModal.onOpen(data.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
