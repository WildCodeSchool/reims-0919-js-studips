import React from 'react';
import ContactCard from './ContactCard';
import PrivateMessage from './PrivateMessage';

function Messaging({
	contactList,
	isContactListVisible,
	isConversationVisible,
	getConversation,
	conversations,
    handleContactList,
    handleChangeNewPvMess
}) {
	return (
		<div>
            <p>Messagerie</p>
			{isContactListVisible && (
				<div className='contactList'>
					<p>Liste de contacts :</p>
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
                    <button onClick={handleContactList}>Retour à la liste de contacts</button>
                    <div>
                        {conversations.map(message => <PrivateMessage messageData={message} />)}
                    </div>
                    <button className='sendPvMessage'>Envoyer un message</button>
                </>
			)}
		</div>
	);
}

export default Messaging;
