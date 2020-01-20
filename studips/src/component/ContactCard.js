import React from 'react';
import Conversation from './Conversation';

function ContactCard({
	getConversation,
	conversation,
    contactData
}) {
    return (
        <div 
            className='contactCard'
            onClick={getConversation}
            id={contactData.id}>
            <img className='avatar' src={contactData.profile_pic}/>
            <div className='contactCardUserName'>
                <p>{contactData.firstname} {contactData.lastname}</p>
            </div>     
        </div>
    )
}

export default ContactCard;
