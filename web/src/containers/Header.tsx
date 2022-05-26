import { FC, ReactNode } from "react";
import "../styles/Header.css";


export const Header:FC<{children:ReactNode}>=({children})=>{
    return(
        <div className="Header">
            {children}
        </div>
    )
}