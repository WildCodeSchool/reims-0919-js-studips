import React from 'react';
import PostCard from './PostCard';
import App from './App.css';

function MainThread() {
	return (
		<div>
			<div className='topButtons'>
				<button>...</button>
				<button>Poster un message</button>
			</div>
			<div className='cardList'>
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
                <PostCard />
                <PostCard />
			</div>
			<div className='navbar'>
				<button>Home</button>
				<button>Recherche</button>
				<button>Notifications</button>
				<button>Messagerie</button>
			</div>
		</div>
	);
}

export default MainThread;
