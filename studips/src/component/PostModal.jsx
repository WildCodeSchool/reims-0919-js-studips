import React from 'react';
import '../App.css';
import '../darkApp.css';

function PostModal({
	isPostModalVisible,
	toggleNewPost,
	handleChangeNewPost,
	handleSubmitNewPost,
	isLightMode
}) {
	return (
		<>
			{isPostModalVisible && (
				<>
					<div className='overlay'>
						<div className='retour' onClick={toggleNewPost}>
							{' '}
							<button>retour</button>
						</div>
						<form className={isLightMode ?'newPostCard' : 'dark_newPostCard'} onSubmit={handleSubmitNewPost}>
							<div className= {isLightMode ? 'categoryChoice' : 'dark_categoryChoice'}>
								<p className={isLightMode ? 'subTitle' : 'dark_subTitle'}>Catégorie :</p>
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
									name='title'
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
								type='submit'
								className='postButton'
								value='Envoyer'
							/>
						</form>
					</div>
				</>
			)}
		</>
	);
}

export default PostModal;
