import React, { useContext } from 'react';
import { deleteContact } from './helpers/deleteContact';
import { getContacts } from './helpers/getContact';
import { ContactContext } from '../context/ContactContext';
import { updateProgress } from './helpers/updateProgress';

export const ActionsBar = ({ contact }) => {
    const { contacts, createContact } = useContext(ContactContext);

    const hanleDelete = async (e) => {
        e.preventDefault();
        await deleteContact(contact.id);
        const data = await getContacts();

        createContact(data);

    };

    const handleProgress = async () => {
        await updateProgress(contact);
        const data = await getContacts();

        createContact(data);
    };
    return (
        <>
            <form onSubmit={ null }>
                <button onClick={ hanleDelete } type="button" className="btn  bg-danger"><i className="bi bi-file-earmark-minus-fill"></i></button>

                <button onClick={ handleProgress } type="button" className={ `btn m-2 border ${ contact.progress === "false" ? "text-secondary bg-white" : "text-white bg-success" }` }><i className="bi bi-check-square "></i></button>
            </form>
        </>
    );
};
