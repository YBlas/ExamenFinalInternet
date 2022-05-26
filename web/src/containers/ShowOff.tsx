import { FC, ReactNode } from "react"
import "../styles/ShowOff.css";

export const ShowOff:FC<{children:ReactNode}>=({children})=>{
    return(
        <div className="ShowOff">
            {children}
        </div>
    )
}