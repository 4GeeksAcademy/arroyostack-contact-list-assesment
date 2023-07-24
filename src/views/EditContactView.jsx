import React, { useContext, useEffect, useState } from 'react';
import { updateContact } from '../components/helpers/updateContact';
import { Navigate, useLocation } from "react-router-dom";

export const EditContact = () => {

    const location = useLocation();

    const [ redirect, setRedirect ] = useState(false);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ avatar, setAvatar ] = useState("");
    const [ company, setCompany ] = useState("");
    const [ id, setId ] = useState("");

    useEffect(() => {

        const { name, email, address, number, avatar, id, company } = location.state;
        setName(name);
        setEmail(email);
        setAddress(address);
        setNumber(number);
        setAvatar(avatar);
        setCompany(company);
        setId(id);
    }, []);

    const newUSer = {
        id,
        name,
        email,
        address,
        number,
        avatar,
        company,

    };

    // SUBMIT AND CREATE CONTACT IN DATABASE API
    const handleSubmit = async (e) => {
        setRedirect(false);
        e.preventDefault();
        if(name.length < 1) {
            //Note: Add more validations.
            alert("name must be at least two ");
            return;
        }
        const data = await updateContact(newUSer);
        setRedirect(true);

    };

    // RESET FORM VARIABLES STATE
    const handleReset = () => {
        setName("");
        setEmail("");
        setAddress("");
        setNumber("");
        setImage("");
        setCompany("");
    };


    // CONTROLLED INPUTS
    const onNameChange = ({ target }) => {
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
    const onAvatarChange = ({ target }) => {
        setAvatar(target.value);
    };
    const onCompanyChange = ({ target }) => {
        setCompany(target.value);
    };

    return (
        <>
            { redirect && <Navigate replace to="/" /> }
            <form className='container p-5 mt-5 rounded card-color ' onSubmit={ handleSubmit }>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor="name"><h6>Name</h6></label>
                    <input id="name"
                        type="text"
                        value={ name }
                        onChange={ onNameChange }
                        className="form-control rounded"
                        required
                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor=""><h6>Email</h6></label>
                    <input id="email"
                        type="email"
                        value={ email }
                        onChange={ onEmailChange }
                        className="form-control rounded"
                        required
                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor="address"><h6>Address</h6></label>
                    <input id="address"
                        type="text"
                        value={ address }
                        onChange={ onAddressChange }
                        className="form-control rounded"
                        required
                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor="phone-number"><h6>Phone Number</h6></label>
                    <input id="phone-number"
                        type="tel"
                        value={ number }
                        onChange={ onNumberChange }
                        className="form-control rounded w-50"
                        required
                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor="Image"><h6>Image</h6></label>
                    <input id="Image"
                        type="url"
                        value={ avatar }
                        onChange={ onAvatarChange }
                        className="form-control rounded w-50"

                    />
                </div>
                <div className="input-group mb-3 row">
                    <label className="col-form-label" htmlFor="company"><h6>Company</h6></label>
                    <input id="company"
                        type="text"
                        value={ company }
                        onChange={ onCompanyChange }
                        className="form-control rounded w-50"
                        required
                    />
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary me-3">Update</button>
                    <button type="reset" className="btn btn-primary me-3" onClick={ handleReset }>Reset</button>
                </div>
            </form>
        </>
    );
};
