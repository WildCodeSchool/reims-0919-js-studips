import React from 'react';
import PostCard from './PostCard';
import '../App.css';
import homeIcon from '../images/home-solid.svg';
import searchIcon from '../images/search-solid.svg';
import messageIcon from '../images/comments-solid.svg';
import menuIcon from '../images/bars-solid.svg';
import notifIcon from '../images/bell-solid.svg';
import axios from 'axios';
import PostModal from './PostModal';
import Menu from './Menu';
import { Redirect } from 'react-router-dom';

class MainThread extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			activeId:'',
			isPostModalVisible: false,
			isMenuVisible: false,
			newPost: {
				user_id: 1,
				title: '',
				category: '',
				content: '',
			},
		};
		this.toggleNewPost = this.toggleNewPost.bind(this);
		this.toggleMenuVisible = this.toggleMenuVisible.bind(this);
		this.handleChangeTab = this.handleChangeTab.bind(this);
		this.handleChangeNewPost = this.handleChangeNewPost.bind(this);
		this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
		this.getThread = this.getThread.bind(this);
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
					activeId:'',
				});
			});
	}
	toggleNewPost() {
		this.setState(prevState => {
			return { isPostModalVisible: !prevState.isPostModalVisible };
		});
	}
	handleChangeTab(event){
		const buttonId = event.target.id;
		this.setState({ activeId: buttonId});
	}
	getTabContent() {		
		switch(this.state.activeId) {
		  case 'stages':	
			 return (this.state.posts
				.filter(post=>post.category  === 'Jobs')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post, i) => {
				return <PostCard postData={post} 
				key={i}/>
			}))
			
		  case 'logements':
			return (this.state.posts
				.filter(post=>post.category==='Logements')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post, i) => {
				return <PostCard postData={post} 
				key={i}/>
			}))
			
		  case 'events':
			return (this.state.posts
				.filter(post=>post.category==='Events')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post, i) => {
				return <PostCard postData={post} 
				key={i}/>
			}))
			
		  case 'cours':
			return (this.state.posts
				.filter(post=>post.category==='Cours')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post, i) => {
				return <PostCard postData ={post} 
				key={i}/>
			}))
			
		  case 'fournitures':
			return (this.state.posts
				.filter(post=>post.category==='Fournitures')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post, i) => {
				return <PostCard postData={post} 
				key={i}/>
			}))
			
		  default:
			return (this.state.posts
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post, i) => {
				return <PostCard postData={post} key={i} />
			}))
		}
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
						handleChangeTab={this.handleChangeTab}/>
					</div>
				)}

				<PostModal
					isPostModalVisible={this.state.isPostModalVisible}
					toggleNewPost={this.toggleNewPost}
					handleChangeNewPost={this.handleChangeNewPost}
					handleSubmitNewPost={this.handleSubmitNewPost}
				/>

				<div className='topButtons'>
					<img
						className='icon'
						src={menuIcon}
						alt='menu'
						onClick={this.toggleMenuVisible}
					/>
					<button className='postButton' onClick={this.toggleNewPost}>
						Poster un message
					</button>
				</div>
				<div className='cardList'>
					{this.getTabContent()}
				</div>
				<div className='navbar'>
					<img 
						className="icon"
						src={homeIcon}
						alt="to home"
						onClick={this.getThread}/>
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
						alt='notifications'/>
				</div>			
			</>)		
	}	
}

export default MainThread;