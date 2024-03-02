import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {useNavigate} from "react-router-dom";
import React from "react";

interface BackButtonProps {
    size?: "1x" | "2x" | "3x" | "4x" | "5x";
    extraStyles?: React.CSSProperties
}

export default function BackButton({size = "2x", extraStyles = {}}: BackButtonProps) {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return <FontAwesomeIcon style={extraStyles} onClick={handleGoBack} size={size} icon={faArrowLeft} />
}