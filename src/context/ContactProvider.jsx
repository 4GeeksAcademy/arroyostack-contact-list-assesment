import { useState } from "react";
import { ContactContext } from "./ContactContext";


export const ContactProvider = ({ children }) => {
    const [ contact, setContact ] = useState([]);

    const createContact = (userObject) => {
        setContact(userObject);
    };

    return (
        <ContactContext.Provider value={ { contact, createContact, salute: { greet: "hominawer" } } }>
            { children }
        </ContactContext.Provider>
    );
};
