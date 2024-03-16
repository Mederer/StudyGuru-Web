import styles from "./Board.module.scss";
import React from "react";
interface BoardProps {
    children: React.ReactNode;
}
function Board({children}: BoardProps)
{
    return (
        <div className={styles.board}>
            {children}
        </div>
    )
}

export default Board;