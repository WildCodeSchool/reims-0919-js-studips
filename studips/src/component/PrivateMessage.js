import React from 'react';

function PrivateMessage({ messageData }) {
    return (
        <div className='pvMessage'>
            <p>{messageData.content}</p>            
        </div>
    )
}

export default PrivateMessage;