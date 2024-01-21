import React from "react";
import "../styles/list.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const EntryElement = ({ entry, deleteElement, editElement }) => {
    return (
        <div className="Element">
            <p className="element-text">{entry.entry}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick = {() => editElement(entry.id)}/>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteElement(entry.id)}/>
            </div>
        </div>
    )
}