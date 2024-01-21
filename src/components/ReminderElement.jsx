import React from "react";
import "../styles/list.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ReminderElement = ({ reminder, deleteElement, editElement }) => {
    return (
        <div className="Element">
            <p className="element-text">{reminder.reminder}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick = {() => editElement(reminder.id)}/>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteElement(reminder.id)}/>
            </div>
        </div>
    )
}