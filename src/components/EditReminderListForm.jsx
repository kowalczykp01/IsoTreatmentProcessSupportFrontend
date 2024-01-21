import React, { useState } from "react";
import "../styles/list.css";

export const EditReminderListForm = ({ editElement, reminder }) => {
    const [value, setValue] = useState(reminder.reminder)

    const handleSubmit = e => {
        e.preventDefault();

        editElement(value, reminder.id);

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