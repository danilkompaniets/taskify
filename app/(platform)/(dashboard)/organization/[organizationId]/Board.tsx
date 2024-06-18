import { deleteBoard } from "@/actions/deleteBoard"
import { Button } from "@/components/ui/button"
import FormDelete from "./FormDelete"

interface BoardProps {
    title: string
    id: string
}

export const Board = ({ title, id }: BoardProps) => {
    const deleteBoardWithId = deleteBoard.bind(null, id)

    return (
        <form action={deleteBoardWithId} key={id} className="flex gap-x-2">
            <p>
                Board title: {title}
            </p>
            <FormDelete />  
        </form>
    )
}