import React, { useState } from "react";
import "../styles/list.css";

export const EditListForm = ({ editElement, entry }) => {
    const [value, setValue] = useState(entry.entry)

    const handleSubmit = e => {
        e.preventDefault();

        editElement(value, entry.id);

        setValue("");
    }
    return (
        <form className="ListForm" onSubmit={handleSubmit}>
            <input type="text" className="list-input" value={value}
                placeholder="Aktualizuj przypomnienie" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="list-btn">Aktualizuj</button>
        </form>
    )
}