import { ContactProvider } from '../context/ContactProvider';
import { ContactsPage } from '../views/ContactsView';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { NewContactForm } from '../views/NewContactForm';
import { EditContact } from '../views/EditContactView';
import { ProfileView } from '../views/ProfileView';
import { Footer } from './Footer';

export const Layout = () => {
    return (
        < >
            <div className="container d-flex flex-column h-100">

                <Navbar />
                <ContactProvider>
                    <Routes>
                        <Route path="/" element={ <ContactsPage /> } />
                        <Route path="/new-contact" element={ <NewContactForm /> } />
                        <Route path="/edit/:id" element={ <EditContact /> } />
                        <Route path="/profile/:id" element={ <ProfileView /> } />
                    </Routes>
                </ContactProvider>

            </div>
            <Footer />
            {/* position: absolute;
top: 0;
bottom: 0;
width: 100%; */}
        </>

    );
};
