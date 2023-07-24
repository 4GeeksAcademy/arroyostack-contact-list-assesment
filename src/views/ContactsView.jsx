import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import { getContacts } from "../components/helpers/getContact";
import { SingleContactCard } from "../components/SingleContactCard";


export const ContactsPage = () => {
    const { contacts, createContact, salute } = useContext(ContactContext);

    const getAllContacts = async () => {
        const data = await getContacts();

        createContact(data);
    };

    useEffect(() => {
        getAllContacts();
    }, []);



    return (

        <>
            <div className="d-flex flex-wrap justify-content-center">

                { contacts.map(contact => {

                    return (
                        <div key={ contact.id } className="cover-image card d-flex justify-content-end m-3" style={ { backgroundImage: `url('${ contact.avatar || 'https://cdn-icons-png.flaticon.com/512/6915/6915987.png' }')` } }>
                            <SingleContactCard contact={ contact } />
                        </div>);
                }) }
            </div>
        </>

    );
};

