import React from 'react';
import '../App.css';

function PostCard({postData}) {
	return (
		<div className='postCard'>
			<div className = 'entete'>
				<img className = 'avatar' src = {postData.picture} alt = 'photo de profile'/>	
				<div className='informations'>
	<p id="name">{postData.firstname} {postData.lastname}</p>
					<p>{postData.studies}, {postData.city}</p>
					<p id = 'category'>{postData.category}</p>
				</div>
			</div>
			<div className='message'>
				<p>{postData.content}</p>
			</div>
			<div className='actions'>
				<div className = 'lss'>
					<img className = 'like' src='https://publicdomainvectors.org/photos/Heart_Gloss_5.png'alt = 'like'/>
					<img className = 'search'src= 'https://www.icone-png.com/png/25/25214.png' alt= ' search'/>
					<img className ='share' src = 'https://image.freepik.com/icones-gratuites/sharethis-logo_318-50326.jpg' alt = 'share' />
				</div>
				<div className = 'saveBox'>
					<img className ='save' src = 'http://www.abyssal-solutions.fr/wp-content/uploads/2016/06/sauvegarde-de-donnees-380x380.png' alt = 'save' />
				</div>
			</div>
		</div>
	);
}

export default PostCard;
