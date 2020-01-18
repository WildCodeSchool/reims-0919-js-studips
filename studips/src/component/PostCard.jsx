import React from 'react';
import '../App.css';
import heartIcon from '../images/heart-solid .svg';
import commentIcon from '../images/comments-regular.svg';
import shareIcon from '../images/share-alt-solid.svg';
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
				<p>{postData.content}</p>
			</div>
			{postData.likes > 0 && <p className="likes">{postData.likes} like(s)</p>}
			<div className='actions'>
				<div className='postReactions'>
					<img
						name={postData.id}
						className='like' 
						src={heartIcon} 
						alt='like'
						onClick={handleLikePost} />
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
