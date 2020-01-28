import React from 'react';

function UserCard({ userData }) {
    return (
        <div 
            className='userCard'
            id={userData.id}
        >
            <img 
                className='avatar' 
                src={userData.profile_pic}
                alt='profile'/>
            <div className='userCardUserName'>
                <p>{userData.firstname} {userData.lastname}</p>
            </div>
        </div>
    )
}

export default UserCard;
