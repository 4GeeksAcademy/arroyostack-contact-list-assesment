import { useState } from "react";
import { ContactContext } from "./ContactContext";


export const ContactProvider = ({ children }) => {
    const [ contacts, setContacts ] = useState([]);

    const createContact = (userObject) => {
        setContacts(userObject);
    };

    return (
        <ContactContext.Provider value={ { contacts, createContact, salute: { greet: "hominawer" } } }>
            { children }
        </ContactContext.Provider>
    );
};
