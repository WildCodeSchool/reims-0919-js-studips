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
import SearchModal from './SearchModal'
import Menu from './Menu';
import { Redirect } from 'react-router-dom';
import { isThisHour } from 'date-fns';

// import { removeAllListeners } from 'nodemon';

class MainThread extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			campus:'',
			user:'',
			city:'',
			posts: [],
			activeId:'',
			isPostModalVisible: false,
			isMenuVisible: false,
			isSearchModalVisible: false,
			newPost: {
				user_id: 1,
				title: null,
				category: null,
				content: null
			},
			eventDate: new Date()
		};
		this.toggleNewPost = this.toggleNewPost.bind(this);
		this.toggleMenuVisible = this.toggleMenuVisible.bind(this);
		this.handleChangeTab = this.handleChangeTab.bind(this);
		this.handleChangeNewPost = this.handleChangeNewPost.bind(this);
		this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
		this.getThread = this.getThread.bind(this);
		this.handleEventDate = this.handleEventDate.bind(this);
		this.toggleNewResearch= this.toggleNewResearch.bind(this);
		this.handleChangeUser= this.handleChangeUser.bind(this);
		this.handleInputChange=this.handleInputChange.bind(this);

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
					city:'',
					user:'',
				});
			});
	}
	toggleNewPost() {
		this.setState(prevState => {
			return { isPostModalVisible: !prevState.isPostModalVisible };
		});
	}
	toggleNewResearch(){
		this.setState(prevState=>{
			return{isSearchModalVisible:!prevState.isSearchModalVisible };
		});
	}
	handleChangeUser(event){
		let searchUser = event.target.value;
		this.setState({user: searchUser});
	}
	handleChangeTab(event){
		const buttonId = event.target.id;
		this.setState({ activeId: buttonId});
	}
	getTabContent() {
		let posts = this.state.posts;
		if (this.state.city.length > 0) {
			posts = posts.filter(post => post.city.toLowerCase() === this.state.city.toLowerCase());
		}
		if (this.state.user.length>0){
			posts = posts.filter(post => post.lastname.toLowerCase() === this.state.user.toLowerCase());
			
		}
		switch(this.state.activeId) {
		  case 'stages':	
			 posts = posts
				.filter(post=>post.category  === 'Jobs')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post) => {
					return <PostCard postData={post}/>
				})
			break;
		  case 'logements':
			posts = posts
				.filter(post=>post.category==='Logements')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post) => {
					return <PostCard postData={post}/>
				})
			break;
		  case 'events':
			posts = posts
				.filter(post=>post.category==='Events')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post) => {
					return <PostCard postData={post}/>
				})
			break;
		  case 'cours':
			posts = posts
				.filter(post=>post.category==='Cours')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post) => {
					return <PostCard postData ={post}/>
				})
			break;
		  case 'fournitures':
			posts = posts
				.filter(post=>post.category==='Fournitures')
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post) => {
					return <PostCard postData={post}/>
				})
			break;
		  default:
			
				posts=posts
				.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
				.map((post, i) => {
				return <PostCard postData={post} key={i} />
			})
		}
		return React.Children.toArray(posts);
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
	handleEventDate(date) {
		this.setState({eventDate: date})
	}
	handleSubmitNewPost(e) {
		e.preventDefault();
		const eventDate = this.state.eventDate.toISOString().slice(0, 19).replace('T', ' ')
		let newPostData = {
			user_id: this.state.newPost.user_id,
			category: this.state.newPost.category,
			title: this.state.newPost.title,
			content: this.state.newPost.content,
			event_date: eventDate
		}
		axios
			.post('http://localhost:8000/posts', newPostData)
			.then(res => console.log(res))
			.catch(err => console.log(err));
		this.setState({ isPostModalVisible: false }, () =>
			setTimeout(this.getThread(), 1000),
		);
	}

	handleInputChange(event) {
		this.setState({city: event.target.value})

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
						postCategory={this.state.newPost.category}
						eventDate={this.state.eventDate}
						handleEventDate={this.handleEventDate}/>
				<div className='topButtons'>
					<img
						className='icon'
						src={menuIcon}
						alt='menu'
						onClick={this.toggleMenuVisible}
					/>
					<div className='inputCity'>
						<input
							type="text"
							onChange={ this.handleInputChange }
							placeholder="Choisir la ville"
							/>

					</div>
					<button className='postButton' onClick={this.toggleNewPost}>
						Poster un message
					</button>
				</div>

				{this.state.isSearchModalVisible?<SearchModal 
					handleChangeUser={this.handleChangeUser}
					user={this.props.user}/>: ''}
				
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
						alt="search"
						onClick={this.toggleNewResearch}/>
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