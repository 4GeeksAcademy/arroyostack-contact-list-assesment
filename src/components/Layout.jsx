import { ContactProvider } from '../context/ContactProvider';
import { ContactsPage } from '../views/ContactsView';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { NewContactForm } from '../views/NewContactForm';
import { EditContact } from '../views/EditContactView';
import { ProfileView } from '../views/ProfileView';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <ContactProvider>
                <Routes>
                    <Route path="/" element={ <ContactsPage /> } />
                    <Route path="/new-contact" element={ <NewContactForm /> } />
                    <Route path="/edit/:id" element={ <EditContact /> } />
                    <Route path="/profile/:id" element={ <ProfileView /> } />
                </Routes>
            </ContactProvider>
        </>

    );
};
