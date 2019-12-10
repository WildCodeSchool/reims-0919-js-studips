import React from 'react';
import '../App.css';
import heartIcon from '../images/heart-solid .svg';
import commentIcon from '../images/comments-regular.svg';
import shareIcon from '../images/share-alt-solid.svg';
import saveIcon from '../images/download-solid.svg';

function PostCard({ postData }) {
	return (
		<div className='postCard'>
			<div className='entete'>
				<img
					className='avatar'
					src={postData.picture}
					alt='profil'
				/>
				<div className='informations'>
					<p id='name'>
						{postData.firstname} {postData.lastname}
					</p>
					<p>
						{postData.studies}, {postData.city}
					</p>
					<p id='category'>{postData.category}</p>
				</div>
			</div>
			<div className='message'>
				<p>{postData.content}</p>
			</div>
			<div className='actions'>
				<div className='postReactions'>
					<img className='like' src={heartIcon} alt='like' />
					<img className='comment' src={commentIcon} alt='comment' />
					<img className='share' src={shareIcon} alt='share' />
				</div>
				<div className='saveBox'>
					<img className='save' src={saveIcon} alt='save' />
				</div>
			</div>
		</div>
	);
}

export default PostCard;
