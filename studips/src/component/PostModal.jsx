import React from 'react';
import '../App.css';

function PostModal({ isPostModalVisible, toggleNewPost, handleChangeNewPost }) {
	return (
		<>		
			{isPostModalVisible && (
				<>
				<div className='overlay'>
					<div className = 'retour'
		 				onClick={toggleNewPost}> <button>retour</button>
					</div>
					<form className='newPostCard'>
						<div className='categoryChoice'>
							<p className='subTitle'>Catégorie :</p>
							<div className='categoryList'>
								<label for='choiceEvent'>
									<input
										type='radio'
										id='choiceEvent'
										name='category'
										value='event'
										onChange={handleChangeNewPost}
									/>
									Evènements
								</label>
								<label for='choiceAccomodation'>
									<input
										type='radio'
										id='choiceAccomodation'
										name='category'
										value='accomodation'
										onChange={handleChangeNewPost}
									/>
									Logements
								</label>
								<label for='choiceClass'>
									<input
										type='radio'
										id='choiceClass'
										name='category'
										value='class'
										onChange={handleChangeNewPost}
									/>
									Cours
								</label>
								<label for='choiceJob'>
									<input
										type='radio'
										id='choiceJob'
										name='category'
										value='job'
										onChange={handleChangeNewPost}
									/>
									Jobs / stages
								</label>
								<label for='choicesupply'>
									<input
										type='radio'
										id='choicesupply'
										name='category'
										value='supply'
										onChange={handleChangeNewPost}
									/>
									Fournitures
								</label>
							</div>
						</div>
						<div className='newPostTitle'>
							<p className='subTitle'>Titre :</p>
							<label for='postTitle'></label>
							<textarea
								className='newTitleBox'
								id='postTitle'
								name='title'
								onChange={handleChangeNewPost}></textarea>
						</div>
						<div>
							<p className='subTitle'>Message :</p>
							<label for='newPost'></label>
							<textarea
								className='newMessageBox'
								id='newPost'
								name='content'
								onChange={handleChangeNewPost}></textarea>
						</div>
						<button type="submit" className='postButton'>Envoyer</button>
					</form>
				</div>
		</>	)}
		</>
	);
}

export default PostModal;
