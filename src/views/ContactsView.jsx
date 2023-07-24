import { useContext, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";
import { getContacts } from "../components/helpers/getContact";
import { addContact } from "../components/helpers/addContact";
import { v4 as uuid } from 'uuid';
import { ActionsBar } from "../components/ActionsBar";

export const ContactsPage = () => {
    const { contacts, createContact, salute } = useContext(ContactContext);
    const obj = {
        name: "John Cage",
        address: "34 Cake Avenue, Manhattan",
        phone: "47673874",
        email: "johncage@gmail.com",
        avatar: "https://www.bruceduffie.com/cage5.jpg",
    };



    const getAllContacts = async () => {
        const data = await getContacts();

        createContact(data);
    };

    useEffect(() => {
        getAllContacts();
    }, []);



    return (
        <div className="d-flex">

            { contacts && contacts.map(contact => {

                return (<div key={ contact.id } className="cover-image card d-flex justify-content-end m-3" style={ { backgroundImage: `url('${ contact.avatar || 'https://cdn-icons-png.flaticon.com/512/6915/6915987.png' }')` } }>

                    <div className="card-color p-2">


                        <h5 className="card-title m-3 ms-0">{ contact.name }</h5>

                        <h6 className="card-title text-secondary "><span><i className="bi bi-envelope-fill text-warning me-1"></i></span>{ contact.email }</h6>

                        <p className="card-title text-secondary"><span><i className="bi bi-geo-alt-fill text-warning me-1"></i></span>{ contact.address }</p>

                        <h6 className="card-title text-secondary"><span><i className="bi bi-phone-vibrate text-warning me-1"></i></span> { contact.number }</h6>
                        <p className="card-title text-secondary"><span><i className="bi bi-building text-warning me-1"></i></span> { contact.company.toUpperCase() }</p>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */ }
                        <ActionsBar contact={ contact } />
                    </div>

                </div>);
            }) }
        </div>

    );
};

