import React from 'react';
import ContactCard from './ContactCard';
import PrivateMessage from './PrivateMessage';
import UserCard from './UserCard';

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
						onClick={handleUserList}>+</button>
				</>
			)}
			{isUserListVisible && (
				<>
					<button 
						onClick={handleUserList}
						className='returnContactList'>Retour
					</button>
					<textarea
						onChange={(e) => handleChangeUserListFilter(e)}>
					</textarea>
					<button
						onClick={getUserList}>Recherche</button>
					<div className='userList'>
						{userList && React.Children.toArray(userList.map(contact => <UserCard userData={contact} />))}						
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
