import {ToastContext} from "../context/ToastContext.tsx";
import {useContext} from "react";

export default function useToast() {
    const {toasts, addToast, deleteToasts} = useContext(ToastContext);

    return {toasts, addToast, deleteToasts};
}