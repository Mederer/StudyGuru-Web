import {createContext, JSX, useState} from "react";

interface ToastContextType {
    toasts: string[];
    addToast: (toast: string) => void;
    deleteToasts: () => void;
}

const ToastContext = createContext({} as ToastContextType);

function ToastProvider({children}: {children: JSX.Element}) {
    const [toasts, setToasts] = useState<string[]>([]);

    const addToast = (toast: string) => {
        setToasts(current => [...current, toast]);
    }

    const deleteToasts = () => {
        setToasts([]);
    }

    return <ToastContext.Provider value={{toasts, addToast, deleteToasts}}>
        {children}
    </ToastContext.Provider>
}

export {ToastContext, ToastProvider};