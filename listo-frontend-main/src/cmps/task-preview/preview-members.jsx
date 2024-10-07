
import { boardService } from "../../services/board.service"
import { useSelector } from 'react-redux'

export const Members = ({ task, onOpenModal }) => {

    const { board } = useSelector((storeState) => storeState.boardModule)

    return (
        <>
            {task.memberIds?.length > 0 && <div className='members-list-container flex column'>
                <div className='members-avatars-container-task-preview flex'>
                    {boardService.getMembersByIds(task.memberIds, board)?.map((member) => {
                        return (
                            <div title={member.fullname} key={member.id} className='member-container flex'
                                onClick={(ev) => {
                                    ev.preventDefault()
                                    onOpenModal(ev, 'member', member)
                                }} >
                                <img src={member.imgUrl} />
                            </div>)
                    })}
                </div>
            </div>}
        </>
    )
}