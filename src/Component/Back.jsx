import React from "react"
import "../asset/TopHeader.css"
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

export default function BackMe(){
    const navigate = useNavigate();
    return(
        <div>
            <BiArrowBack className="BackMe" onClick={() => navigate(-1)} />
        </div>
    )
}