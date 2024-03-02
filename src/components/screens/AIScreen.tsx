import styles from "./AiScreen.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store.ts";
import {decrement, increment, incrementByAmount} from "../../features/counter/counterSlice.ts";
import {useEffect, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom"

export default function AIScreen() {
    const navigate = useNavigate();
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    const {authStatus} = useAuthenticator(context => [context.authStatus]);

    // if (authStatus === "unauthenticated") {
    //     navigate("/");
    // }

    useEffect(() => {
        if (authStatus === "unauthenticated") {
            navigate("/");
        }
    }, [authStatus, navigate]);

    return <div className={styles.aiScreen}>
        <h1>AI Quiz</h1>
        <p>Coming soon...</p>
        <p>Current count is {count}</p>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <input type="text" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Increase by amount</button>

    </div>
}