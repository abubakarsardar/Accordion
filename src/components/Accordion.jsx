import { useEffect, useState } from "react";
import faq from "../assets/API/faq.json";
import { FAQ } from "../UI/FAQ";
export const Accordion = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(faq);
    },[]);

    return   <>

    <h1>Accordion</h1>
    <ul className="section-accordion">

       {
        data.map((CurElem) => {
            return (
                <FAQ key={CurElem.id} curData = {CurElem} />

            )
        })};

    </ul>

    </>

};