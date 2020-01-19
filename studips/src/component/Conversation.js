import React from 'react';

function Conversation({ conversation }) {
    return (
        <div>
            {conversation.map(mess => <div><p></p></div>)}
        </div>
    )
}

export default Conversation;