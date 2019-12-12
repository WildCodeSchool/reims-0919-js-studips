import React from 'react';
import '../App.css';

function PostModal({ showPostModal }) {
	return showPostModal ? (
		<div className='overlay'>
			<div className='newPostCard'>
                <div className='categoryChoice'>
                    <p>Choisir une catégorie :</p>
                    <div className='categoryName'>
                        <label for='choiceEvent'></label>
                        <input type='radio' id='choiceEvent' value='event' />
                        <p >Evènements</p>
                    </div>
                    <div className='categoryName'>
                        <label for='choiceAccomodation'></label>
                        <input type='radio' id='choiceAccomodation' value='accomodation' />
                        <p >Logements</p>
                    </div>
                    <div className='categoryName'>       
                        <label for='choiceClass'></label>
                        <input type='radio' id='choiceClass' value='class' />
                        <p >Cours</p>
                    </div>
                    <div className='categoryName'>                    
                        <label for='choiceJob'></label>             
                        <input type='radio' id='choiceJob' value='job' />
                        <p >Jobs / stages</p>
                    </div>
                    <div className='categoryName'>
                        <label for='choicesupply'></label>
                        <input type='radio' id='choicesupply' value='supply' />
                        <p >Fournitures</p>
                    </div>
                </div>
                <div className='newPostTitle'>
                    <p>Titre :</p>
                    <label for='postTitle'></label>
                    <input type='textarea' id="postTitle" />
                </div>
                <div>
                    <input className='newMessageBox' type='textarea' id='newPost' />
                </div>
                <button className='postButton'>Envoyer</button>
			</div>
		</div>
	) : null;
}

export default PostModal;
