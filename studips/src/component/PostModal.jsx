import React from 'react';
import '../App.css';

function PostModal({ isPostModalVisible, toggleNewPost, handleChangeNewPost, handleSubmitNewPost, postCategory }) {
	return (
		<>		
			{isPostModalVisible && (
				<>
				<div className='overlay'>
					<div className = 'retour'
		 				onClick={toggleNewPost}> <button>retour</button>
					</div>
					<form 
						className='newPostCard'
						onSubmit={handleSubmitNewPost}>
						<div className='categoryChoice'>
							<p className='subTitle'>Catégorie :</p>
							<div className='categoryList'>
								<label htmlFor='choiceEvent'>
									<input
										type='radio'
										id='choiceEvent'
										name='category'
										value='Events'
										onChange={handleChangeNewPost}
									/>
									Evènements
								</label>
								<div className='eventDateTime'>
									<label htmlFor='event_date'>
										<input
											type='date'
											id='event_date'
											name='event_date'
											disabled={postCategory === 'Events' ? false : true}/>
									</label>
									<label htmlFor='event_time'>
										<input
											type='time'
											id='event_time'
											name='event_time'
											disabled={postCategory === 'Events' ? false : true}/>
									</label>
								</div>
								<label htmlFor='choiceAccomodation'>
									<input
										type='radio'
										id='choiceAccomodation'
										name='category'
										value='Logements'
										onChange={handleChangeNewPost}
									/>
									Logements
								</label>
								<label htmlFor='choiceClass'>
									<input
										type='radio'
										id='choiceClass'
										name='category'
										value='Cours'
										onChange={handleChangeNewPost}
									/>
									Cours
								</label>
								<label htmlFor='choiceJob'>
									<input
										type='radio'
										id='choiceJob'
										name='category'
										value='Jobs'
										onChange={handleChangeNewPost}
									/>
									Jobs / stages
								</label>
								<label htmlFor='choicesupply'>
									<input
										type='radio'
										id='choicesupply'
										name='category'
										value='Fournitures'
										onChange={handleChangeNewPost}
									/>
									Fournitures
								</label>
							</div>
						</div>
						<div className='newPostTitle'>
							<p className='subTitle'>Titre :</p>
							<label htmlFor='postTitle'></label>
							<textarea
								className='newTitleBox'
								id='postTitle'
								name='title'
								onChange={handleChangeNewPost}></textarea>
						</div>
						<div>
							<p className='subTitle'>Message :</p>
							<label htmlFor='newPost'></label>
							<textarea
								className='newMessageBox'
								id='newPost'
								name='content'
								onChange={handleChangeNewPost}></textarea>
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

export default PostModal;
