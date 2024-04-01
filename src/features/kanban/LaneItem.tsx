import styles from "./LaneItem.module.scss";
import React from "react";

interface LaneItemProps {
    id: number;
    title: string;
}
function LaneItem({ id, title }: LaneItemProps) {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text/plain", id.toString());
        e.dataTransfer.dropEffect = "move";
        console.log("Beginning drag");
    };

    return (
        <div
            className={styles.laneItem}
            draggable={true}
            onDragStart={handleDragStart}
        >
            <p>{id}</p>
            <p>{title}</p>
        </div>
    );
}

export default LaneItem;
