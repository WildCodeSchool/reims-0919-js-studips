import React from 'react';
import homeIcon from '../images/home-solid.svg';
import searchIcon from '../images/search-solid.svg';
import messageIcon from '../images/comments-solid.svg';
import notifIcon from '../images/bell-solid.svg';

function Navbar({ getThread, handleChangeTab }) {
    return (
        <div className='navbar'>
            <img 
                className="icon"
                src={homeIcon}
                alt="to home"
                onClick={getThread}/>
            <img
                className="icon"
                src={searchIcon}
                alt="search"/>
            <img
                id="messagerie"
                className="icon"
                src={messageIcon}
                alt="messages"
                onClick={handleChangeTab}/>
            <img
                className="icon"
                src={notifIcon}
                alt='notifications'/>
        </div>	
    )
}

export default Navbar;
