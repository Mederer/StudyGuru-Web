import React from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps {
    value: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
}
export default function TextArea({value, onChange, label, rows = 5}: TextAreaProps) {

    return <div className={styles.textArea}>
        <label htmlFor={label}>{label}</label>
        <textarea value={value} onChange={onChange} name={label} rows={rows} />
    </div>
}