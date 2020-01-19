import React from 'react';

function ContactCard({ contactData }) {
    return (
        <div className='contactCard'>
            <img className='avatar'/>
            <div className='userName'>
                <p>{contactData.firstname}</p>
                <p>{contactData.lastname}</p>
            </div>
        </div>
    )
}

export default ContactCard;
