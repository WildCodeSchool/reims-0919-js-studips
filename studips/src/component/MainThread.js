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
			activeId:'',
			isPostModalVisible: false,
			isMenuVisible:false
		};
		this.toggleNewPost = this.toggleNewPost.bind(this);
		this.toggleMenuVisible = this.toggleMenuVisible.bind(this);
		this.handleChangeTab = this.handleChangeTab.bind(this);
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
	handleChangeTab(event){
		const buttonId = event.target.id;
		this.setState({ activeId: buttonId});
	}
	getTabContent() {		
		switch(this.state.activeId) {
		  case 'stages':			
			 return (this.state.posts
				.filter(post=>post.category === 'Job')
				.map(post => {
				return <PostCard postData={post} 
				key={this.state.posts.id}/>
			}))
			break
		  case 'logements':
			return (this.state.posts
				.filter(post=>post.category==='Logement')
				.map(post => {
				return <PostCard postData={post} 
				key={this.state.posts.id}/>
			}))
			break
		  case 'events':
			return (this.state.posts
				.filter(post=>post.category==='Event')
				.map(post => {
				return <PostCard postData={post} 
				key={this.state.posts.id}/>
			}))
			break
		  case 'cours':
			return (this.state.posts
				.filter(post=>post.category==='Cours')
				.map(post => {
				return <PostCard postData ={post} 
				key={this.state.posts.id}/>
			}))
			break
		  case 'fournitures':
			return (this.state.posts
				.filter(post=>post.category==='Fournitures')
				.map(post => {
				return <PostCard postData={post} 
				key={this.state.posts.id}/>
			}))
			break
		  default:
			return (this.state.posts.map(post => {
				return <PostCard postData={post} />
			}))
		}
	  }
	render() {
		
		return (
				<>
				{this.state.isMenuVisible && <div onClick={this.toggleMenuVisible}>
					<Menu handleChangeTab={this.handleChangeTab}/>
				</div>}
				{this.state.isPostModalVisible && <div onClick={this.toggleNewPost}>
					<PostModal
						isPostModalVisible={this.state.isPostModalVisible}/>
				</div>}
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
				{
            	this.getTabContent()
         		}
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
