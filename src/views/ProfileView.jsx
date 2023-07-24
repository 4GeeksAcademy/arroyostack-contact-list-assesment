import React, { useContext, useState } from 'react';

import { Navigate, useLocation } from "react-router-dom";

export const ProfileView = () => {
    const location = useLocation();
    console.log(location.state);
    const { name, email, address, number, avatar, id, company, progress } = location.state;
    return (
        <section className="vh-100 mt-0" style={ { backgroundColor: "#f4f5f7;" } }>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                    <div className="card" style={ { borderRadius: ".5rem;" } }>
                        <div className="row g-0">
                            <div className="col-md-4 gradient-custom text-center text-white"
                                style={ { borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem;" } }>
                                <img src={ avatar }
                                    alt="Avatar" className="my-5  rounded" style={ { width: "10rem" } } />
                                <h5>{ name }</h5>

                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h6>Information</h6>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Name</h6>
                                            <p className="text-muted">{ name }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Phone</h6>
                                            <p className="text-muted">{ number }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Address</h6>
                                            <p className="text-muted">{ address }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Email</h6>
                                            <p className="text-muted">{ email }</p>
                                        </div>
                                    </div>
                                    <h6>Company</h6>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Current</h6>
                                            <p className="text-muted">{ company.toUpperCase() }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Liked Contact</h6>
                                            <p className="text-muted">{ progress === "true" ? "Yes" : "No" }</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                        <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                        <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
