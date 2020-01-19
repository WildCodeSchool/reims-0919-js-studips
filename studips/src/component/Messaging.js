import React from 'react';
import ContactCard from './ContactCard';

function Messaging({ contactList, getConversation, conversation }) {
    return (
        <div>
            <p>Liste de contacts :</p>
            {contactList.map((contact, i) => <ContactCard key={i} contactData={contact} conversation={conversation} getConversation={getConversation}/>)}
        </div>
    )
}

export default Messaging;
