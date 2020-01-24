import React from 'react';

function PvModal({ togglePvModal, handleSubmitPrivateMessage, handleChangeNewPvMess, isPvModalVisible }) {
    return (
        <>
            {isPvModalVisible && (
                <>
                <div className='overlay'>
                    <div className = 'retour'> <button type="button" onClick={togglePvModal}>retour</button>
                    </div>
                    <div className='newPostCard'>
                        <div>
                            <p className='subTitle'>Message :</p>
                            <label htmlFor='newPv'></label>
                            <textarea
                                className='newMessageBox'
                                id='newPv'
                                name='content'
                                onChange={handleChangeNewPvMess}></textarea>
                        </div>
                            <button 
                                type="button" 
                                className='postButton'
                                onClick={(e) => {
                                    handleSubmitPrivateMessage(e)
                                    togglePvModal()
                                }}
                            >
                                Envoyer
                            </button>
                        </div>
                    </div>
                </>	)}
            </>
        );
}

export default PvModal;
