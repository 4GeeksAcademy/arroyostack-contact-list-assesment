import React, { useContext, useState } from 'react';
import { addContact } from './helpers/addContact';
import { ContactContext } from '../context/ContactContext';
import { v4 as uuid } from 'uuid';
import { Navigate } from "react-router-dom";

export const NewContactForm = () => {
    const { contacts, createContact } = useContext(ContactContext);

    const [ redirect, setRedirect ] = useState(false);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ image, setImage ] = useState("");
    const [ company, setCompany ] = useState("");
    const newUSer = {
        name,
        email,
        address,
        number,
        image,
        company
    };

    // SUBMIT AND CREATE CONTACT IN DATABASE API
    const handleSubmit = async (e) => {
        setRedirect(false);
        e.preventDefault();
        if(name.length < 1) {
            alert("name must be at least two ");
        }
        const data = await addContact(newUSer, uuid());
        createContact(contacts);
        setRedirect(true);

    };


    // CONTROLLED INPUTS
    const onNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };
    const onEmailChange = ({ target }) => {
        setEmail(target.value);
    };
    const onAddressChange = ({ target }) => {
        setAddress(target.value);
    };
    const onNumberChange = ({ target }) => {
        setNumber(target.value);
    };
    const onImageChange = ({ target }) => {
        setImage(target.value);
    };
    const onCompanyChange = ({ target }) => {
        setCompany(target.value);
    };

    return (
        <>
            { redirect && <Navigate replace to="/" /> }
            <form className='container bg-light p-5 mt-5 rounded' onSubmit={ handleSubmit }>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor=""><h6>Name</h6></label>
                    <input
                        type="text"
                        value={ name }
                        onChange={ onNameChange }
                        className="form-control rounded"
                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor=""><h6>Email</h6></label>
                    <input
                        type="email"
                        value={ email }
                        onChange={ onEmailChange }
                        className="form-control rounded"
                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor=""><h6>Address</h6></label>
                    <input
                        type="text"
                        value={ address }
                        onChange={ onAddressChange }
                        className="form-control rounded"
                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor=""><h6>Phone Number</h6></label>
                    <input
                        type="tel"
                        value={ number }
                        onChange={ onNumberChange }
                        className="form-control rounded w-50"
                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor=""><h6>Image</h6></label>
                    <input
                        type="url"
                        value={ image }
                        onChange={ onImageChange }
                        className="form-control rounded w-50"
                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor=""><h6>Company</h6></label>
                    <input
                        type="text"
                        value={ company }
                        onChange={ onCompanyChange }
                        className="form-control rounded w-50"
                    />
                </div>
                <div className="d-grid gap-2">

                </div>
                <button type="submit" className="btn btn-primary">Button</button>
            </form>
        </>
    );
};
