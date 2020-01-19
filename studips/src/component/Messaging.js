import React from 'react';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';

function Messaging(props) {
    return (
        <div>
            <p>Liste de contacts :</p>
            {props.contactList.map(contact => <ContactCard contactData={contact}/>)}
        </div>
    )
}

export default Messaging;
