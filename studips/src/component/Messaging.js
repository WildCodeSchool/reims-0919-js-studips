import React from 'react';
import ContactCard from './ContactCard';

function Messaging({
	contactList,
	getConversation,
	conversation,
	handleChangeTab
}) {
	return (
		<div>
			<p>Liste de contacts :</p>
			{contactList.map((contact) => (
				<ContactCard
					contactData={contact}
					key={contact.id}
					handleChangeTab={handleChangeTab}
					conversation={conversation}
					getConversation={getConversation}
				/>
			))}
		</div>
	);
}

export default Messaging;
