import React from 'react';
import '../App.css';

function PostCard({postData}) {
	return (
		<div className='postCard'>
			<div className = 'entete'>
				<img className = 'avatar' src = 'https://expatenvrac.com/wp-content/uploads/2013/03/Les-plus-belles-femmes-du-monde-Colombie-300x300.png'alt = 'photo de profile'/>	
				<div className='informations'>
					<p id="name">LICHETTE Mannon</p>
					<p>Faculté de massages, Amsterdam</p>
					<p id = 'category'>Evènement</p>
				</div>
			</div>
			<div className='message'>
				<p>Hello, j’ai un bon plan à vous proposer! Ce soir, il y a une soirée à thèmeorganisée par la faculté des sciences de Reims , 
					c’est ouvert à tous et c’est seulement 5$ l’entrée!!! Venez nombreux
				</p>
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
