import React, {Component} from 'react';
import '../App.css'
import {Link} from 'react-router-dom';

class Menu extends Component{
	constructor(props){
	super(props)
		this.state={
			
		}
	}

	render(){
		return(
			<div className = 'menu'>
				<div className = 'profile'>
				<img 
					id='retour' 
					src='https://zupimages.net/up/20/03/wunb.png'
					alt='retour'
				/>
					<div className='prof'>
					<Link to ={{pathname: '/profil', state: {userData: this.props.userData}}}>
						<img className= 'userPic' src ={this.props.userData.profile_pic} alt = 'profil'/>
					</Link>
					<p className='userName'>{this.props.userData.lastname} , {this.props.userData.firstname}</p>
					</div>
				</div>
				<button 
				id = "stages"
				onClick = {this.props.handleChangeTab}
				className = {this.props.activeId==='stages' ? 'active' : ''}
				>
					Stages / Jobs
				</button>
				<button
				id = "logements"
				onClick = {this.props.handleChangeTab}
				className = {this.props.activeId==='logements' ? 'active' : ''}
				>
					Logements
				</button>
				<button
				id = "events"
				onClick = {this.props.handleChangeTab}
				className = {this.props.activeId==='events' ? 'active' : ''}
				>
					Events / Sorties
				</button>
				<button
				id = "cours"
				onClick = {this.props.handleChangeTab}
				className = {this.props.activeId==='cours' ? 'active' : ''}
				>
					Cours
				</button>
				<button
				id = "fournitures"
				onClick = {this.props.handleChangeTab}
				className = {this.props.activeId==='fournitures' ? 'active' : ''}
				>
					Fournitures
				</button>
				<div className='logoMenu'>
					<img src='https://zupimages.net/up/19/51/iq11.png' alt=''></img>
				</div>
			</div>
		)
	}
}

export default Menu;
