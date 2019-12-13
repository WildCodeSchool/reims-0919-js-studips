import React from 'react';
import '../App.css';

function PostModal({ showPostModal }) {
	return showPostModal ? (
		<div className='overlay'>
            <div className='newPostCard'>
                <div className='categoryChoice'>
                    <p className='categoryName'>Catégorie :</p>
                    <label className='categoryName' for='choiceEvent'>
                    <input type='radio' id='choiceEvent' name='category' value='event'/>Evènements</label>
                    <label className='categoryName' for='choiceAccomodation'>
                    <input type='radio' id='choiceAccomodation' name='category' value='accomodation' />Logements</label>
                    <label className='categoryName'for='choiceClass'>
                    <input type='radio' id='choiceClass' name='category' value='class' />Cours</label>
                    <label className='categoryName' for='choiceJob'>           
                    <input  type='radio' id='choiceJob' name='category' value='job' />Jobs / stages</label>  
                    <label className='categoryName'for='choicesupply'>
                    <input  type='radio' id='choicesupply' name='category' value='supply' />Fournitures</label>
                </div>
                <div className='newPostTitle'>
                    <p className='categoryName'>Titre :</p>
                    <label for='postTitle'></label>
                    <textarea id="postTitle"></textarea>
                </div>
                <div>
                    <label for='newPost'></label>
                    <textarea className='newMessageBox' id='newPost'></textarea>
                </div>
                <button className='postButton'>Envoyer</button>
            </div>
		</div>
	) : null;
}

export default PostModal;
