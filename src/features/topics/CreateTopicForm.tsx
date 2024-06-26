import { FormEvent, useEffect, useState } from "react";
import TextArea from "../../components/common/TextArea.tsx";
import { useCreateTopicMutation } from "../../services/studyguruApi.ts";
import { toast } from "react-toastify";
import { HexColorInput, HexColorPicker } from "react-colorful";
import styles from "./CreateTopicForm.module.scss";

function CreateTopicForm() {
    const [name, setName] = useState("");
    const [createTopic, { reset, isSuccess, isError }] =
        useCreateTopicMutation();
    const [colour, setColour] = useState("#000000");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Creating topic", name);
        createTopic({ name, colour });
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("Topic created");
            setName("");
            reset();
        } else if (isError) {
            toast.error("Error creating topic");
        }
    }, [isSuccess, isError, reset]);

    return (
        <form onSubmit={handleSubmit} className={styles.createTopicForm}>
            <TextArea
                value={name}
                label="Topic Name"
                onChange={(e) => setName(e.target.value)}
            />
            <HexColorPicker color={colour} onChange={setColour} />
            <HexColorInput color={colour} onChange={setColour} />
            <button type="submit">Create</button>
        </form>
    );
}

export default CreateTopicForm;
