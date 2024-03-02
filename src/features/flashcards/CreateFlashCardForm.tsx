import {FormEvent, useEffect, useState} from "react";
import {useCreateFlashCardMutation} from "../../services/studyguruApi.ts";

const validateQuestion = (question: string) => question.length > 2;
const validateAnswer = (answer: string) => answer.length > 2;

export default function CreateFlashCardForm() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [createFlashCard, {reset, isSuccess}] = useCreateFlashCardMutation();

    useEffect(() => {
        if (isSuccess) {
            alert("Flash card created!")
            setQuestion("");
            setAnswer("");
            reset();
        }
    }, [isSuccess, reset]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateQuestion(question) || !validateAnswer(answer)) {
            return;
        }
        createFlashCard({question, answer});
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="question">Question</label>
            <input name="question" id="question" value={question} onChange={e => setQuestion(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="answer">Answer</label>
            <input name="answer" id="answer" value={answer} onChange={e => setAnswer(e.target.value)}/>
        </div>
        <button type="submit">Create</button>
    </form>
}