import React from 'react';

function PostCard() {
	return (
		<div className='postCard'>
			<div className='photo'>
				<img src = 'https://actu.devisman.com/wp-content/uploads/2018/03/femme-credit-immobilier-777x437.jpg'alt = 'photo de profile'/>
			</div>
			<div className='informations'>
				<ul>
					<li>LICHETTE Mannon</li>
					<li>Faculté de massages, Amsterdam</li>
					<li>Evènement</li>
				</ul>
			</div>
			<div className='message'>
				<p>Hello, j’ai un bon plan à vous proposer! Ce soir, il y a une soirée à thèmeorganisée par la faculté des sciences de Reims , 
					c’est ouvert à tous et c’est seulement 5$ l’entrée!!! Venez nombreux
				</p>
			</div>
			<div className='actions'>
				<img id = 'like' src='https://publicdomainvectors.org/photos/Heart_Gloss_5.png'alt = 'like'/>
				<img/>
			</div>
		</div>
	);
}

export default PostCard;
