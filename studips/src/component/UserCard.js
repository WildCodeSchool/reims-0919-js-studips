import React from 'react';

function UserCard({ userData }) {
    return (
        <div 
            className='userCard'
            id={userData.id}>
            <div className='userCardMain'>
                <img 
                    className='avatar' 
                    src={userData.profile_pic}
                    alt='profile'/>
                <div className='userCardInfo'>
                    <p>{userData.firstname} {userData.lastname}</p>
                    <p>{userData.study}, {userData.city}</p>
                </div>
            </div>
            <button className='postButton3'>+</button>
        </div>
    )
}

export default UserCard;
