import { useEffect } from "react";

export default function TextArea(props) {

    const sendText = (e) => {
        if(props.syncText != null) props.syncText(e.target.value);
    }

    return(
        <form>
        <textarea id="text" name="story" placeholder ={props.placeholder} readOnly={props.readOnly} value={props.value} onChange={e => sendText(e)}>

        </textarea>
    </form>   
    )
}