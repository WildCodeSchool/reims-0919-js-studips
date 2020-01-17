import React from 'react';
import PostCard from './PostCard';
import '../App.css';
import homeIcon from '../images/home-solid.svg';
import searchIcon from '../images/search-solid.svg';
import messageIcon from '../images/comments-solid.svg';
import menuIcon from '../images/bars-solid.svg';
import dark_menuIcon from '../images/dark_menuIcon.png';
import notifIcon from '../images/bell-solid.svg';
import axios from 'axios';
import PostModal from './PostModal';
import Menu from './Menu';
import { Redirect } from 'react-router-dom';
import '../darkApp.css'

class MainThread extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			isPostModalVisible: false,
			isMenuVisible: false,
			isLightMode: true,
			newPost: {
				user_id: 1,
				title: '',
				category: '',
				content: '',
			},
		};
		this.toggleNewPost = this.toggleNewPost.bind(this);
		this.toggleMenuVisible = this.toggleMenuVisible.bind(this);
		this.handleChangeNewPost = this.handleChangeNewPost.bind(this);
		this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
		this.getThread = this.getThread.bind(this);
		this.switchToDarkMode=this.switchToDarkMode.bind(this);
		
	}
	componentDidMount() {
		this.getThread();
	}
	getThread() {
		axios
			.get('http://localhost:8000/posts')
			.then(response => response.data)
			.then(data => {
				this.setState({
					posts: data,
				});
			});
	}
	switchToDarkMode(){
		this.setState(prevState => {
			return {isLightMode : !prevState.isLightMode}
		})
	}
	toggleNewPost() {
		this.setState(prevState => {
			return { isPostModalVisible: !prevState.isPostModalVisible };
		});
	}
	toggleMenuVisible() {
		this.setState(prevState => {
			return { isMenuVisible: !prevState.isMenuVisible };
		});
	}
	
	handleChangeNewPost(event) {
		const propertyName = event.target.name;
		const newPost = this.state.newPost;
		newPost[propertyName] = event.target.value;
		this.setState({ newPost: newPost });
	}
	handleSubmitNewPost(e) {
		e.preventDefault();
		let newPostData = {
			user_id: this.state.newPost.user_id,
			category: this.state.newPost.category,
			title: this.state.newPost.title,
			content: this.state.newPost.content,
		};
		axios
			.post('http://localhost:8000/posts', newPostData)
			.then(res => console.log(res))
			.catch(err => console.log(err));
		this.setState({ isPostModalVisible: false }, () =>
			setTimeout(this.getThread(), 500),
		);
	}

	render() {
		const isNotConnected = this.props.token === null;
		if (isNotConnected) {
			return <Redirect to='/login' />;
		}
		return (
			<>
				{this.state.isMenuVisible && (
					<div onClick={this.toggleMenuVisible}>
						<Menu
						isLightMode={this.state.isLightMode}
						switchToDarkMode={this.switchToDarkMode} 
						/>
					</div>
				)}

				<PostModal
					isPostModalVisible={this.state.isPostModalVisible}
					toggleNewPost={this.toggleNewPost}
					handleChangeNewPost={this.handleChangeNewPost}
					handleSubmitNewPost={this.handleSubmitNewPost}
					isLightMode={this.state.isLightMode} 
				/>

				<div className={this.state.isLightMode ? 'topButtons' : 'dark_topButtons'}>	
					<img
						className='icon'
						src={menuIcon}
						alt='menu'
						onClick={this.toggleMenuVisible}
					/>
																		
					<button className={this.state.isLightMode ?'postButton' : 'dark_postButton'} onClick={this.toggleNewPost}>
						Poster un message
					</button>
				</div>
				<div className={this.state.isLightMode ?'cardList' : 'dark_cardList'}>
					{React.Children.toArray(
						this.state.posts
							.sort((a, b) => (a.created_at > b.created_at ? -1 : 1))
							.map(post => <PostCard isLightMode={this.state.isLightMode} postData={post} />),
					)}
				</div>
				<div className='navbar'>
					<img className='icon' src={homeIcon} alt='to home' />
					<img className='icon' src={searchIcon} alt='search' />
				</div>
			</>
		);
	}
}

export default MainThread;
