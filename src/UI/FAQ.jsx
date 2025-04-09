import { useState } from "react";

export const FAQ = ({curData}) => {
    const {question,answer} = curData;
    const [activeID, setActiveID] = useState(false);

    const handlebtn = () => {
        setActiveID(!activeID);
    }

    return (

       <li >
                    <div className="accordion-grid">
                        <p>{question}</p>
                        <button onClick={handlebtn} className={activeID ? "active-btn" : ""} > {activeID ? "Close" : "Show"}</button>
                    </div>
                    <p>{activeID && answer}</p>
                </li> 

    )
}

