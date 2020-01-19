import React from 'react';

function ContactCard({ contactData }) {
    return (
        <div className='contactCard'>
            <img className='avatar'/>
            <div className='contactCardUserName'>
                <p>{contactData.firstname} {contactData.lastname}</p>
            </div>
        </div>
    )
}

export default ContactCard;
