import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav className="card-color center-nav navbar navbar-expand-lg navbar-light container d-flex justify-content-center rounded mt-1">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="nav nav-pills menu-sidebar ps-2">
                            <li className="nav-item p-0" >
                                <Link to="/" className="nav-link text-center p-0" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/new-contact" className="nav-link p-0">Create-Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
