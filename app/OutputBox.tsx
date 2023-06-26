import { useState } from "react"


export default function OutputBox(props: {value : string}) {
    const [inputText, setInputText] = useState('')
    return (
        <div className="parent">
            <p
                placeholder=""
                className="outputbox"
            >{props.value}</p>
        </div>
    )
}