import React from 'react';
import { ActionsBar } from './ActionsBar';
import { Link } from 'react-router-dom';

export const SingleContactCard = ({ contact }) => {
    return (
        <div className="card-color p-2 hide-show">
            <Link to={ `profile/${ contact.id }` } state={ contact }>

                <h5 className="card-title m-3 ms-0 text-dark">{ contact.name }</h5>

                <h6 className="card-title text-secondary "><span><i className="bi bi-envelope-fill text-warning me-1"></i></span>{ contact.email }</h6>

                <p className="card-title text-secondary"><span><i className="bi bi-geo-alt-fill text-warning me-1"></i></span>{ contact.address }</p>

                <h6 className="card-title text-secondary"><span><i className="bi bi-phone-vibrate text-warning me-1"></i></span> { contact.number }</h6>
                <p className="card-title text-secondary"><span><i className="bi bi-building text-warning me-1"></i></span> { contact.company.toUpperCase() }</p>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */ }
            </Link>
            <ActionsBar contact={ contact } />
        </div>
    );
};
