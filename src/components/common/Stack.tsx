import React from "react";
import styles from "./Stack.module.scss";

interface StackProps {
    children: React.ReactNode;
    direction: "row" | "column";
    gap: number;
}
function Stack({ children, direction, gap }: StackProps) {
    return (
        <div className={styles.stack} style={{ gap, flexDirection: direction }}>
            {children}
        </div>
    );
}

export default Stack;
