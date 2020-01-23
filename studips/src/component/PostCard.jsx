import React from 'react';
import '../App.css';
import heartIcon from '../images/heart-solid .svg';
import heartIconRed from '../images/heart-solid-red.svg';
import saveIcon from '../images/download-solid.svg';

function PostCard({ postData, handleLikePost }) {
	return (
		<div className='postCard'>
			<div className='entete'>
				<p id='category'>{postData.category}</p>
				<div className='userProfile'>
					<img className='avatar' src={postData.profile_pic} alt='profil' />
					<div className="userInfo">
						<p id='name'>
							{postData.firstname} {postData.lastname}
						</p>
						<p>
							{postData.study}, {postData.city}
						</p>
					</div>
				</div>
				<p className='postDate'>{postData.created_at}</p>
			</div>
			<div className='triangle'></div>
			<div className='message'>
				<div className='messageHeader'>
					<p className='postTitle'>{postData.title}</p>
					{postData.category === "Events" && <p>{postData.event_date}</p>}
				</div>
				<p className='postMessage'>{postData.content}</p>
			</div>
			
			<div className='actions'>
				<div className='postReactions'>
					<img
						name={postData.id}
						className='like'
						src={postData.likedByUser === 1 ? heartIconRed : heartIcon} 
						alt='like'
						onClick={handleLikePost} />
				{postData.likedByUser === 1}
				{postData.likes > 0 && <p className="likes"> {postData.likes} like(s)</p>}
				</div>
				<div className='saveBox'>
					<img className='save' src={saveIcon} alt='save' />
				</div>
			</div>
		</div>
	);
}

export default PostCard;
