import React, { useState } from "react";
import "../styles/list.css";

export const ReminderListForm = ({ addElement }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addElement(value);

        setValue("");
    }
    return (
        <form className="EntryListForm" onSubmit={handleSubmit}>
            <input type="text" className="list-input" value={value}
                placeholder="Dodaj przypomnienie" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="list-btn">Dodaj</button>
        </form>
    )
}