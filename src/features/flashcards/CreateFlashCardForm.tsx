import { FormEvent, useEffect, useState } from "react";
import {
    useCreateFlashCardMutation,
    useGetAllTopicsQuery,
} from "../../services/studyguruApi.ts";
import { toast } from "react-toastify";
import TextArea from "../../components/common/TextArea.tsx";

const validateQuestion = (question: string) => question.length > 2;
const validateAnswer = (answer: string) => answer.length > 2;

export default function CreateFlashCardForm() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [createFlashCard, { reset, isSuccess, isError }] =
        useCreateFlashCardMutation();
    const {
        data: topics,
        isLoading: topicsLoading,
        isError: topicsError,
    } = useGetAllTopicsQuery();

    const [selectedTopicId, setSelectedTopicId] = useState("");

    useEffect(() => {
        if (isSuccess) {
            toast.success("Flash card created");
            setQuestion("");
            setAnswer("");
            reset();
        } else if (isError) {
            toast.error("Error creating flash card");
        }
    }, [isSuccess, reset, isError]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateQuestion(question) || !validateAnswer(answer)) {
            return;
        }
        createFlashCard({ question, answer, topicId: selectedTopicId });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextArea
                value={question}
                label="Question"
                onChange={(e) => setQuestion(e.target.value)}
            />
            <TextArea
                value={answer}
                label="Answer"
                onChange={(e) => setAnswer(e.target.value)}
            />
            {topicsLoading ? (
                <div>Loading...</div>
            ) : topicsError ? (
                <div>Error: {topicsError.toString()}</div>
            ) : (
                <select
                    value={selectedTopicId}
                    onChange={(e) => setSelectedTopicId(e.target.value)}
                >
                    {topics?.map((topic) => (
                        <option key={topic.id} value={topic.id}>
                            {topic.name}
                        </option>
                    ))}
                </select>
            )}
            <br />
            <br />
            <button type="submit">Create</button>
        </form>
    );
}
