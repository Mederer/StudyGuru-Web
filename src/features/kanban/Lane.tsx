import {useDispatch} from "react-redux";
import {moveItem} from "./kanbanSlice.ts";
import React, {useState} from "react";

interface LaneProps {
    title: string;
    children: React.ReactNode;
}

function Lane({title, children}: LaneProps) {
    const dispatch = useDispatch();
    const [showGhost, setShowGhost] = useState(false);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        dispatch(moveItem({id: parseInt(data), stage: title}))
        setShowGhost(false);
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setShowGhost(true);
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setShowGhost(false);
    }

    return (
        <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
            <p>{title}</p>
            {children}
            {showGhost && <div>Ghost</div>}
        </div>
    );
}

export default Lane;