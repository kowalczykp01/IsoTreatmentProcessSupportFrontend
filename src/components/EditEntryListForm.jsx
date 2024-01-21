import React, { useState } from "react";
import "../styles/list.css";

export const EditEntryListForm = ({ editElement, entry }) => {
    const [value, setValue] = useState(entry.entry.substring(13))

    const handleSubmit = e => {
        e.preventDefault();

        editElement(value, entry.id);

        setValue("");
    }
    return (
        <form className="EntryListForm" onSubmit={handleSubmit}>
            <input type="text" className="list-input" value={value}
                placeholder="Aktualizuj przypomnienie" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="list-btn">Aktualizuj</button>
        </form>
    )
}