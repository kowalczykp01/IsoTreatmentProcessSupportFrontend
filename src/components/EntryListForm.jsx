import React, { useState } from "react";
import "../styles/list.css";

export const EntryListForm = ({ addElement }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addElement(value);

        setValue("");
    }
    return (
        <form className="EntryListForm" onSubmit={handleSubmit}>
            <input type="text" className="list-input" value={value}
                placeholder="Dodaj wpis" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="list-btn">Dodaj</button>
        </form>
    )
}