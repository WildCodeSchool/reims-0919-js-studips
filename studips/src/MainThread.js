import React from 'react';
import PostCard from './PostCard';
import './App.css';
import menuIcon from './images/bars-solid.svg';
import homeIcon from './images/home-solid.svg';
import searchIcon from './images/search-solid.svg';
import messageIcon from './images/comments-solid.svg';
import notifIcon from './images/bell-solid.svg';
import axios from 'axios';


class MainThread extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: []
		}
	}
	componentDidMount() {
		axios
			.get("http://localhost:8000/posts")
			.then(response => response.data)
			.then(data => {
				this.setState({
                    posts: data
				})
			})
	}
	render() {
		return (
			<div>
				<div className='topButtons'>
					<img
						className="menuIcon"
						src={menuIcon}
						alt="menu"/>
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
					<img 
						className="navbarIcons"
						src={homeIcon}
						alt="to home"/>
					<img
						className="navbarIcons"
						src={searchIcon}
						alt="search"/>
					<img
						className="navbarIcons"
						src={messageIcon}
						alt="messages"/>	
					<img
						className="navbarIcons"
						src={notifIcon}
						alt="notifications"/>
				</div>
			</div>
		)
	}	
}

export default MainThread;
