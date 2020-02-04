import React from 'react';

function PrivateMessage({ messageData, userId }) {
    return (
        <div className='pvMessageContainer'>
            {messageData.sender_id === userId ?
            <>
                <img 
                    className='profilePicConversation'
                    src={messageData.profile_pic}
                    alt='profile'/>
                <div className='pvMessageUser'>
                    <p>{messageData.content}</p>
                </div>
            </> :
            <>
                <div className='pvMessageContact'>
                    <p>{messageData.content}</p>
                </div>
                <img 
                    className='profilePicConversation'
                    src={messageData.profile_pic}
                    alt='profile'/>
            </>
            }
        </div>
    )
}

export default PrivateMessage;