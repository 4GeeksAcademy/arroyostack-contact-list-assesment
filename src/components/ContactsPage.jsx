import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";


export const ContactsPage = () => {
    // api calls here;
    const { contact, createContact } = useContext(ContactContext);
    createContact({ name: 'wily' });

    return (
        <div>{ contact.name }</div>
    );
};
