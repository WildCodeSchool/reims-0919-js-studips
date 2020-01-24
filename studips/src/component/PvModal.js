import React from 'react';

function PvModal({ togglePvModal, handleSubmitPrivateMessage, handleChangeNewPvMess, isPvModalVisible }) {
    return (
        <>
            {isPvModalVisible && (
                <>
                <div className='overlay'>
                    <div className = 'retour'
                        onClick={togglePvModal}> <button>retour</button>
                    </div>
                    <form className='newPostCard' onSubmit={handleSubmitPrivateMessage}>
                        <div>
                            <p className='subTitle'>Message :</p>
                            <label htmlFor='newPv'></label>
                            <textarea
                                className='newMessageBox'
                                id='newPv'
                                name='content'
                                onChange={handleChangeNewPvMess}></textarea>
                        </div>
                            <input 
                                type="submit" 
                                className='postButton'
                                value="Envoyer"
                            />
                        </form>
                    </div>
                </>	)}
            </>
        );
}

export default PvModal;
