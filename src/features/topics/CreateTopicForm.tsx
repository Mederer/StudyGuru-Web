import { FormEvent, useEffect, useState } from "react";
import TextArea from "../../components/common/TextArea.tsx";
import { useCreateTopicMutation } from "../../services/studyguruApi.ts";
import { toast } from "react-toastify";

function CreateTopicForm() {
    const [name, setName] = useState("");
    const [createTopic, { reset, isSuccess, isError }] =
        useCreateTopicMutation();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Creating topic", name);
        createTopic({ name });
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
        <form onSubmit={handleSubmit}>
            <TextArea
                value={name}
                label="Topic Name"
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Create</button>
        </form>
    );
}

export default CreateTopicForm;
