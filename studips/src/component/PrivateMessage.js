import React from 'react';

function PrivateMessage({ messageData }) {
    return (
        <div>
            <p>{messageData.content}</p>            
        </div>
    )
}

export default PrivateMessage;