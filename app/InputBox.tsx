import { useState } from "react"


export default function InputBox(props: {value: string, onChange:(event: React.ChangeEvent<HTMLInputElement>) => void}) {
    const [inputText, setInputText] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
        props.onChange(event); // Call the onChange prop to pass the event to the parent component
      };

    return (
        <div className="parent">
            <input
                type="text"
                name="input-text"
                value={inputText}
                placeholder="Input Text"
                onChange={
                    handleInputChange
                }
                className="inputbox"
            />
        </div>
    )
}