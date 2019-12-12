import React from 'react';
import PostCard from './PostCard';
import '../App.css';
import menuIcon from '../images/bars-solid.svg';
import homeIcon from '../images/home-solid.svg';
import searchIcon from '../images/search-solid.svg';
import messageIcon from '../images/comments-solid.svg';
import notifIcon from '../images/bell-solid.svg';
import axios from 'axios';
import PostModal from './PostModal'

class MainThread extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			showPostModal: false,
		};
		this.postHandle = this.postHandle.bind(this);
	}
	componentDidMount() {
		axios
			.get('http://localhost:8000/posts')
			.then(response => response.data)
			.then(data => {
				this.setState({
					posts: data,
				});
			});
	}
	postHandle() {
		this.setState({ showPostModal: !this.state.showPostModal });
	}
	render() {
		return (
			<div>
				<PostModal showPostModal={this.state.showPostModal}/>
				<div className='topButtons'>
					<img className='menuIcon' src={menuIcon} alt='menu' />
					<button className='postButton' onClick={this.postHandle}>
						Poster un message
					</button>
				</div>
				<div className='cardList'>
					{this.state.posts.map(post => {
						return <PostCard postData={post} />;
					})}
				</div>
				<div className='navbar'>
					<img className='navbarIcons' src={homeIcon} alt='to home' />
					<img className='navbarIcons' src={searchIcon} alt='search' />
					<img className='navbarIcons' src={messageIcon} alt='messages' />
					<img
						className='navbarIcons'
						src={notifIcon}
						alt='notifications'
					/>
				</div>
			</div>
		);
	}
}

export default MainThread;
