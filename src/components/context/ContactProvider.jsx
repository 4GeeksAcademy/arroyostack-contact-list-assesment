import { ContactContext } from "./contactContext";

export const ContactProvider = ({ children }) => {
    const [ contact, setContact ] = useState();

    const createContact = (contactObject) => {
        setContact(contactObject);

        return (
            <ContactContext.Provider value={ { contact, setContact } }>
                { children }
            </ContactContext.Provider>
        );

    };
};