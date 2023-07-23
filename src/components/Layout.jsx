import { ContactProvider } from '../context/ContactProvider';
import { ContactsPage } from '../views/ContactsView';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { NewContactForm } from './NewContactForm';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <ContactProvider>
                <Routes>
                    <Route path="/" element={ <ContactsPage /> } />
                    <Route path="/new-contact" element={ <NewContactForm /> } />
                </Routes>
            </ContactProvider>
        </>

    );
};
