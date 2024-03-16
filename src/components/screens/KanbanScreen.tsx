import Board from "../../features/kanban/Board.tsx";
import Lane from "../../features/kanban/Lane.tsx";
import LaneItem from "../../features/kanban/LaneItem.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store.ts";

function KanbanScreen() {
    const items = useSelector((state: RootState) => state.kanban.items);

    const lanes = ["Backlog", "To Do", "In Progress", "Done"];

    return (
        <div>
            <h1>Kanban</h1>
            <Board>
                {lanes.map((lane, index) => {
                    return (
                        <Lane key={index} title={lane}>
                            {items.filter((item) => item.stage === lane).map((item) => {
                                return (
                                    <LaneItem key={item.id} id={item.id} title={item.title} />
                                )
                            })}
                        </Lane>
                    )
                })}
            </Board>
        </div>
    )
}

export default KanbanScreen;