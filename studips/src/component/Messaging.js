import React from 'react';
import ContactCard from './ContactCard';
import PrivateMessage from './PrivateMessage';

function Messaging({
	contactList,
	isContactListVisible,
	isConversationVisible,
	getConversation,
	conversations,
    handleContactList
}) {
	return (
		<div>
			<h3>Messagerie</h3>
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
                        {conversations.map(message => <PrivateMessage messageData={message}/>)}
                    </div>
                </>
			)}
		</div>
	);
}

export default Messaging;
