import React from 'react';

function ContactCard({ contactData }) {
    return (
        <div className='contactCard'>
            <img className='avatar' src={contactData.profile_pic}/>
            <div className='contactCardUserName'>
                <p>{contactData.firstname} {contactData.lastname}</p>
            </div>
        </div>
    )
}

export default ContactCard;
