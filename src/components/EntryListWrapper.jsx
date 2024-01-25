import React, { useState, useEffect } from "react";
import { EntryListForm } from "./EntryListForm";
import { EntryElement } from "./EntryElement";
import { EditEntryListForm } from "./EditEntryListForm";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import moment from 'moment/min/moment-with-locales';



export const EntryListWrapper = () => {
    moment.locale('pl');
    const [elements, setElements] = useState([]);
    /*const token = Cookies.get('token');
    var decodedToken = jwtDecode(token);
    var userId = decodedToken[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];*/

    const fetchEntryData = async () => {
        try {
            const response = await fetch(
                `https://localhost:7242/api/entry/`,
                {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setElements(data.map(entry => ({
                    id: entry.id,
                    entry: "[" + moment(entry.date).format('L') + "] " + entry.content,
                    isEditing: false
                })));
            } else {
                console.error("Błąd podczas pobierania danych");
            }
        } catch (error) {
            console.error("Wystąpił błąd:", error);
        }
    };

    useEffect(() => {
        fetchEntryData();
    }, []);

    const addElement = async (element) => {

        try {
            const response = await fetch('https://localhost:7242/api/entry/', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Content": element,
                    "Date": new Date()
                }),
            });

            if (response.ok) {
                console.log('Dodano do bazy!');
                const { id, content, date } = await response.json();
                setElements([...elements, { id: id, entry: "[" + moment(date).format('L') + "] " + content, isEditing: false }]);
                console.log(elements);
            } else {
                console.error('Błąd podczas dodawania wpisu');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    }

    const deleteElement = async (id) => {
        try {
            const response = await fetch('https://localhost:7242/api/entry/' + id, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Usunięto wpis!');
                setElements(elements.filter(element => element.id !== id))
                console.log(elements);
            } else {
                console.error('Błąd podczas usuwania wpisu');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    }

    const editElement = id => {
        setElements(elements.map(element => element.id === id ?
            { ...element, isEditing: !element.isEditing } : element))
    }

    const editEntry = async (entry, id) => {

        try {
            const response = await fetch('https://localhost:7242/api/entry/' + id, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Content": entry,
                })
            });

            if (response.ok) {
                console.log('Zaktualizowano wpis!');
                const { content, date } = await response.json();
                setElements(elements.map(element => element.id === id ? { ...element, entry: "[" + moment(date).format('L') + "] " + content, isEditing: !element.isEditing } : element))
            } else {
                console.error('Błąd podczas aktualizowania wpisu');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    }
    return (
        <div className="EntryListWrapper">
            <EntryListForm addElement={addElement} />
            {elements.map((element, index) => (
                element.isEditing ? (
                    <EditEntryListForm editElement={editEntry} entry={element} />
                ) : (
                    <EntryElement entry={element} key={index}
                        deleteElement={deleteElement}
                        editElement={editElement} />
                )
            ))}
        </div>
    )
} 