import { FC, ReactNode } from "react";
import "../styles/Options.css";


export const Options:FC<{children:ReactNode}>=({children})=>{
    return(
        <div className="Options">
            {children}
        </div>
    )
}