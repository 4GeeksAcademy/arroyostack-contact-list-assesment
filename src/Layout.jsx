import { ContactProvider } from './context/ContactProvider';
import { ContactsPage } from './views/ContactsPage';
import { Route, Routes } from 'react-router-dom';

export const Layout = () => {
    return (
        <ContactProvider>
            <Routes>
                <Route path="/" element={ <ContactsPage /> } />
            </Routes>
        </ContactProvider>

    );
};
