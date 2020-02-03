import React from 'react';
import ContactCard from './ContactCard';
import PrivateMessage from './PrivateMessage';
import UserCard from './UserCard';
import searchIcon from '../images/search-solid.svg';

function Messaging({
	contactList,
	userList,
	isContactListVisible,
	isConversationVisible,
	isUserListVisible,
	getConversation,
    getConversationAfterPv,
	getUserList,
	conversations,
	handleAddNewContact,
    handleContactList,
    handleChangeNewPvMess,
	handleChangeUserListFilter,
    handleSubmitPrivateMessage,
	handleUserList,
	userId
}) {
	return (
		<div className='messaging'>
            <p className='titleMessaging'>Messagerie</p>
			{isContactListVisible && (
				<>
					<div className='contactList'>
						<p className='contactListTitle'>Liste de contacts</p>
						{React.Children.toArray(contactList.map(contact => (
							<ContactCard
								contactData={contact}
								isContactListVisible={isContactListVisible}
								isConversationVisible={isConversationVisible}
								getConversation={getConversation}
							/>
						)))}
					</div>	
					<button 
						className='addContactButton'
						onClick={()=> {
							handleUserList()
						}}>+</button>
				</>
			)}
			{isUserListVisible && (
				<>
					<button 
						className='returnContactList'
						onClick={handleUserList}>Retour
					</button>
					<div className='searchUser'>
						<input
							type='text'
							className='searchUserInput space:inline'
							onChange={(e) => handleChangeUserListFilter(e)}>
						</input>
						<img
							src={searchIcon}
							alt='Recherche'
							onClick={getUserList}
							className='searchUserButton'/>
					</div>
					<div className='userList'>
						{userList && React.Children.toArray(userList.map(contact => <UserCard userData={contact} handleAddNewContact={handleAddNewContact} />))}						
					</div>
				</>
			)}
			{isConversationVisible && (
                <>
                    <button 
						onClick={handleContactList}
						className='returnContactList'>Retour</button>
                    <div className='messageList'>
                        {React.Children.toArray(conversations.map(message => <PrivateMessage messageData={message} userId={userId} />))}
                    </div>
					<div className='newPvMessage'>
						<textarea
							name='content'
							className='newPvTextArea'
							onChange={handleChangeNewPvMess}>
						</textarea>
						<button
							className='sendPvMessage'
							onClick={(e) => {
								handleSubmitPrivateMessage(e)
							}}>Envoyer</button>
					</div>
                </>
			)}
		</div>
	);
}

export default Messaging;
