import { useState } from "react"


export default function OutputBox() {
    const [inputText, setInputText] = useState('')
    return (
        <div className="parent">
            <p
                placeholder="Input Text"
                className="inputbox"
            />
        </div>
    )
}