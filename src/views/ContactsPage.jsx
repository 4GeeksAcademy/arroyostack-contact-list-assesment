import { useContext, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";
import { getContacts } from "../components/helpers/getContact";
import { addContact } from "../components/helpers/addContact";
import { deleteTask } from "../components/helpers/deleteTask";

export const ContactsPage = () => {
    const { contacts, createContact, salute } = useContext(ContactContext);
    const obj = {
        name: "John Cage",
        address: "34 Cake Avenue, Manhattan",
        phone: "47673874",
        email: "johncage@gmail.com",
        avatar: "https://www.bruceduffie.com/cage5.jpg",
        id: "67"
    };

    // const handleClick = async () => {
    //     const data = await addContact(obj);
    //     createContact(contacts, data);
    // };

    const getAllContacts = async () => {
        const data = await getContacts();

        createContact(data);
    };

    useEffect(() => {
        getAllContacts();
    }, []);



    return (
        <div>{ salute.greet }

            <p>{ JSON.stringify(contacts) }</p>



            <div className="d-grid gap-2">
                {/* <button onClick={ handleClick } type="button" name="" id="" className="btn btn-primary">Button</button> */ }
            </div>
        </div>

    );
};
