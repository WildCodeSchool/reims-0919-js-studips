import React from 'react';

function ContactCard({ contactData, getConversation }) {
    return (
        <div 
            className='contactCard'
            id={contactData.id}
            onClick={()=>getConversation(contactData.id)}
        >
            <img 
                className='avatar' 
                src={contactData.profile_pic}
                alt='profile'/>
            <div className='contactCardUserName'>
                <p>{contactData.firstname} {contactData.lastname}</p>
            </div>
        </div>
    )
}

export default ContactCard;
