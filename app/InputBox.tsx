import { useState } from "react"


export default function InputBox(props: {value: String, onChange:(event: React.ChangeEvent<HTMLInputElement>) => void}) {
    const [inputText, setInputText] = useState('')
    return (
        <div className="parent">
            <input
                type="text"
                name="input-text"
                value={inputText}
                placeholder="Input Text"
                onChange={
                    (e) => setInputText(e.target.value)
                }
                className="inputbox"
            />
        </div>
    )
}