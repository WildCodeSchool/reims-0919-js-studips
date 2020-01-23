import React from 'react';
import ContactCard from './ContactCard';

function Messaging({ contactList }) {
    return (
        <>
            <h3>Messagerie</h3>
            <p>Liste de contacts :</p>
            {contactList.map(contact => <ContactCard contactData={contact}/>)}
        </>
    )
}

export default Messaging;
