import React from 'react';

function ContactCard({ contactData, getConversation }) {
    return (
        <div 
            className='userCard'
            id={contactData.id}
            onClick={()=>getConversation(contactData.id)}
        >
            <img 
                className='avatar' 
                src={contactData.profile_pic}
                alt='profile'/>
            <div className='contactCardInfos'>
                <p className='contactCardName'>{contactData.firstname} {contactData.lastname}</p>
                <p>{contactData.study}, {contactData.city} </p>
            </div>
        </div>
    )
}

export default ContactCard;
