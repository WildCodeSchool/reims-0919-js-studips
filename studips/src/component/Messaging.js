import React from 'react';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';

function Messaging({ contactList, getConversation, conversation }) {
    return (
        <div>
            <p>Liste de contacts :</p>
            {contactList.map(contact => <ContactCard contactData={contact} conversation={conversation} getConversation={getConversation}/>)}
        </div>
    )
}

export default Messaging;
