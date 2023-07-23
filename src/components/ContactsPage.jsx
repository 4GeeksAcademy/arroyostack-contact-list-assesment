import { useContext, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";
import { getContacts } from "./helpers/getContact";

export const ContactsPage = () => {
    const { contacts, createContact, salute } = useContext(ContactContext);


    const getAllContacts = async () => {
        const data = await getContacts();

        createContact(data);
        localStorage.setItem("contacts", JSON.stringify(data));
    };

    useEffect(() => {
        getAllContacts();
    }, []);



    return (
        <div>{ salute.greet }

            <h1>{ JSON.stringify(contacts) }</h1>

            <div className="d-grid gap-2">
                <button onClick={ getContacts } type="button" name="" id="" className="btn btn-primary">Button</button>
            </div>
        </div>

    );
};
