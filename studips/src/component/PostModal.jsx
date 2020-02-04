import React from 'react';
import '../App.css';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);

function PostModal({
	isPostModalVisible,
	toggleNewPost, 
	handleChangeNewPost, 
	handleSubmitNewPost, 
	postCategory, 
	eventDate, 
	handleEventDate}) {
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
										<DatePicker
											name='event_date'
											locale='fr'
											selected={eventDate}
											onChange={handleEventDate}
											showTimeSelect
											timeFormat='HH:mm'
											dateFormat='d MMMM yyyy à HH:mm'
											timeCaption='Heure'
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
						<button 
							type="submit" 
							className='submitNewPostButton'
						>Envoyer</button>
					</form>
				</div>
			</>	)}
		</>
	);
}

export default PostModal;
