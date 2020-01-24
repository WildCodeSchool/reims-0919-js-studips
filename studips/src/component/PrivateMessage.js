import React from 'react';

function PrivateMessage({ messageData, userId }) {
    return (
        <div className={messageData.sender_id === userId ? 'pvMessageUser': 'pvMessageContact'}>
            <p>{messageData.content}</p>            
        </div>
    )
}

export default PrivateMessage;