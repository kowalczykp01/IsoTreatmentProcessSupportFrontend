import React, { useState, useEffect } from "react";
import { ReminderListForm } from "./ReminderListForm";
import { ReminderElement } from "./ReminderElement";
import { EditReminderListForm } from "./EditReminderListForm";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import moment from 'moment/min/moment-with-locales';



export const ReminderListWrapper = () => {
    moment.locale('pl');
    const [elements, setElements] = useState([]);
    /*const token = Cookies.get('token');
    var decodedToken = jwtDecode(token);
    var userId = decodedToken[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];*/

    const fetchReminderData = async () => {
        try {
            const response = await fetch(
                `https://localhost:7242/api/reminder/`,
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
                setElements(data.map(reminder => ({
                    id: reminder.id,
                    reminder: reminder.time,
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
        fetchReminderData();
    }, []);

    const addElement = async (element) => {

        try {
            const response = await fetch('https://localhost:7242/api/reminder/', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "time": element,
                })
            });

            if (response.ok) {
                console.log('Dodano do bazy!');
                const { id, time } = await response.json();
                setElements([...elements, { id: id, reminder: time, isEditing: false }]);
                console.log(elements);
            } else {
                console.error('Błąd podczas dodawania przypomnienia');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    }

    const deleteElement = async (id) => {
        try {
            const response = await fetch('https://localhost:7242/api/reminder/' + id, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Usunięto przypomnienie!');
                setElements(elements.filter(element => element.id !== id))
                console.log(elements);
            } else {
                console.error('Błąd podczas usuwania przypomnienia');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    }

    const editElement = id => {
        setElements(elements.map(element => element.id === id ?
            { ...element, isEditing: !element.isEditing } : element))
    }

    const editReminder = async (reminder, id) => {

        try {
            const response = await fetch('https://localhost:7242/api/reminder/' + id, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Time": reminder,
                })
            });

            if (response.ok) {
                console.log('Zaktualizowano przypomnienie!');
                const { time } = await response.json();
                setElements(elements.map(element => element.id === id ? { ...element, reminder: time, isEditing: !element.isEditing } : element))
            } else {
                console.error('Błąd podczas aktualizowania przypomnienia');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    }
    return (
        <div className="EntryListWrapper">
            <ReminderListForm addElement={addElement} />
            {elements.map((element, index) => (
                element.isEditing ? (
                    <EditReminderListForm editElement={editReminder} reminder={element} />
                ) : (
                    <ReminderElement reminder={element} key={index}
                        deleteElement={deleteElement}
                        editElement={editElement} />
                )
            ))}
        </div>
    )
} 