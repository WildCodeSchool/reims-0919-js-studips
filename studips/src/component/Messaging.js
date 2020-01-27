import React from 'react';
import ContactCard from './ContactCard';
import PrivateMessage from './PrivateMessage';

function Messaging({
	contactList,
	isContactListVisible,
	isConversationVisible,
	getConversation,
    getConversationAfterPv,
	conversations,
    handleContactList,
    handleChangeNewPvMess,
    handleSubmitPrivateMessage,
	userId
}) {
	return (
		<div className='messaging'>
            <p className='titleMessaging'>Messagerie</p>
			{isContactListVisible && (
				<div className='contactList'>
					<p className='contactListTitle'>Liste de contacts</p>
					{contactList.map(contact => (
						<ContactCard
							contactData={contact}
							isContactListVisible={isContactListVisible}
							isConversationVisible={isConversationVisible}
							getConversation={getConversation}
						/>
					))}
				</div>
			)}
			{isConversationVisible && (
                <>
                    <button 
						onClick={handleContactList}
						className='returnContactList'>Retour</button>
                    <div className='messageList'>
                        {conversations.map(message => <PrivateMessage messageData={message} userId={userId} />)}
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
