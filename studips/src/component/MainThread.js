import React from 'react';
import PostCard from './PostCard';
import '../App.css';
import homeIcon from '../images/home-solid.svg';
import searchIcon from '../images/search-solid.svg';
import messageIcon from '../images/comments-solid.svg';
import menuIcon from '../images/bars-solid.svg';
import notifIcon from '../images/bell-solid.svg';
import axios from 'axios';
import PostModal from './PostModal'
import Menu from './Menu'
import {Redirect} from 'react-router-dom';

class MainThread extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			isPostModalVisible: false,
			isMenuVisible:false
		};
		this.toggleNewPost = this.toggleNewPost.bind(this);
		this.toggleMenuVisible = this.toggleMenuVisible.bind(this);
		this.submitPost=this.submitPost.bind(this);
	}
	componentDidMount() {
		axios
			.get('http://localhost:8000/posts')
			.then(response => response.data)
			.then(data => {
				this.setState({
                    posts: data
				})
			});
	}
	submitPost(){
		axios
			.post('http://localhost:8000/posts')
			.then(res => {
				console.log(res)
				console.log(res.data);
			})
	}
	toggleNewPost() {
		this.setState((prevState) => {
			return {isPostModalVisible: !prevState.isPostModalVisible}
		})
	}
	toggleMenuVisible() {
		this.setState((prevState) => {
			return {isMenuVisible: !prevState.isMenuVisible}
		});
	}
	render() {
        const isNotConnected = (this.props.token === null);
        if(isNotConnected) {
            return <Redirect to='/login' />
        }
		return (
			<>
				{this.state.isMenuVisible && <div onClick={this.toggleMenuVisible}>
					<Menu/>
				</div>}
				{this.state.isPostModalVisible }
					<PostModal
						isPostModalVisible={this.state.isPostModalVisible}
						toggleNewPost={this.toggleNewPost}
						submitPost={this.submitPost}
					/>
				
				<div className='topButtons'>
					<img 
						className="icon"
						src={menuIcon}
						alt="menu"					
						onClick={this.toggleMenuVisible} />
					<button
						className='postButton'
						onClick={this.toggleNewPost}>Poster un message</button>
				</div>
				<div className='cardList'>
					{React.Children.toArray(
						this.state.posts.map(post => <PostCard postData={post} />)
					)}
				</div>
				<div className='navbar'>
					<img 
						className="icon"
						src={homeIcon}
						alt="to home"/>
					<img
						className="icon"
						src={searchIcon}
						alt="search"/>
					<img
						className="icon"
						src={messageIcon}
						alt="messages"/>	
					<img
						className="icon"
						src={notifIcon}
						alt='notifications'
					/>
				</div>
			</>
		)
	}	
}

export default MainThread;
