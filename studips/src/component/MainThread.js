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

class MainThread extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			isPostModalVisible: false,
			isMenuVisible:false,
			newPost: {
				user_id: 1,
				title: "",
				category: "",
				content: "",
				event_date: "",				
				event_time: ""
			}
		};
		this.toggleNewPost = this.toggleNewPost.bind(this);
		this.toggleMenuVisible = this.toggleMenuVisible.bind(this);
		this.handleChangeNewPost = this.handleChangeNewPost.bind(this);
		this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
		this.getThread = this.getThread.bind(this);
	}
	getThread() {
		axios
			.get('http://localhost:8000/posts')
			.then(response => response.data)
			.then(data => {
				this.setState({
                    posts: data
				})
			});
	}
	componentDidMount() {
		this.getThread()
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
	handleChangeNewPost(event) {
		const propertyName = event.target.name
		const newPost = this.state.newPost
		newPost[propertyName] = event.target.value
		this.setState({ newPost: newPost })
	}
	handleSubmitNewPost(e) {
		e.preventDefault()
		let newPostData = {
			user_id: this.state.newPost.user_id,
			category: this.state.newPost.category,
			title: this.state.newPost.title,
			content: this.state.newPost.content,
			event_date: this.state.newPost.event_date,
			event_time: this.state.newPost.event_time
		}
		axios
			.post('http://localhost:8000/posts', newPostData)
			.then(res => console.log(res))
			.catch(err => console.log(err))
		this.setState({isPostModalVisible: false}, () => setTimeout(this.getThread(), 500))
	}
	render() {
		return (
			<>
				{this.state.isMenuVisible && <div onClick={this.toggleMenuVisible}>
					<Menu/>
				</div>}
				{this.state.isPostModalVisible }
					<PostModal
						isPostModalVisible={this.state.isPostModalVisible}
						toggleNewPost={this.toggleNewPost}
						handleChangeNewPost={this.handleChangeNewPost}
						handleSubmitNewPost={this.handleSubmitNewPost}
						postCategory={this.state.newPost.category}/>
				
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
					{this.state.posts
						.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
						.map(post => <PostCard postData={post} />)}
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
