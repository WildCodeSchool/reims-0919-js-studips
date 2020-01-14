import React from 'react';
import '../App.css';

function PostModal({ isPostModalVisible, toggleNewPost, submitPost }) {
	return (
		<>
		
			{isPostModalVisible && (
				<>
				<div className='overlay'>
				<div className = 'retour'
		 onClick={toggleNewPost}> <button>retour</button>
		</div>
					<form onSubmit={submitPost} className='newPostCard'>
						<div className='categoryChoice'>
							<p className='subTitle'>Catégorie :</p>
							<div className='categoryList'>
								<label for='choiceEvent'>
									<input
										type='radio'
										id='choiceEvent'
										name='category'
										value='event'
									/>
									Evènements
								</label>
								<label for='choiceAccomodation'>
									<input
										type='radio'
										id='choiceAccomodation'
										name='category'
										value='accomodation'
									/>
									Logements
								</label>
								<label for='choiceClass'>
									<input
										type='radio'
										id='choiceClass'
										name='category'
										value='class'
									/>
									Cours
								</label>
								<label for='choiceJob'>
									<input
										type='radio'
										id='choiceJob'
										name='category'
										value='job'
									/>
									Jobs / stages
								</label>
								<label for='choicesupply'>
									<input
										type='radio'
										id='choicesupply'
										name='category'
										value='supply'
									/>
									Fournitures
								</label>
							</div>
						</div>
						<div className='newPostTitle'>
							<p className='subTitle'>Titre :</p>
							<label for='postTitle'></label>
							<textarea
								name='title'
								className='newTitleBox'
								id='postTitle'></textarea>
						</div>
						<div>
							<p className='subTitle'>Message :</p>
							<label for='newPost'></label>
							<textarea
								className='newMessageBox'
								id='newPost' name='content'></textarea>
						</div>
						<button type='submit' className='postButton'>Envoyer</button>
					</form>
				</div>
		</>	)}
		</>
	);
}

export default PostModal;
