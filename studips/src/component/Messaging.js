import React from 'react';
import ContactCard from './ContactCard';
import PrivateMessage from './PrivateMessage';
import PvModal from './PvModal';

function Messaging({
	contactList,
	isContactListVisible,
	isConversationVisible,
    isPvModalVisible,
	getConversation,
	conversations,
    handleContactList,
    handleChangeNewPvMess,
    handleSubmitPrivateMessage,
    togglePvModal
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
                    <PvModal 
                        handleChangeNewPvMess={handleChangeNewPvMess}
                        handleSubmitPrivateMessage={handleSubmitPrivateMessage}
                        isPvModalVisible={isPvModalVisible}
                        togglePvModal={togglePvModal}/>
                    <button onClick={handleContactList}>Retour à la liste de contacts</button>
                    <div>
                        {conversations.map(message => <PrivateMessage messageData={message} />)}
                    </div>
                    <button 
                        className='sendPvMessage'
                        onClick={togglePvModal}>Envoyer un message</button>
                </>
			)}
		</div>
	);
}

export default Messaging;
