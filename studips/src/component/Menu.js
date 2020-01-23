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
					<div className='prof'>
					<Link to ='/profil'>
					<img className= 'userPic' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKVvQJdRW6Kj8X6iO6l5YDn-fU_5ic04qB6udb_fMZhS2qycz&s' alt = 'profil'/>
					<p className='userName'>AIMAR , Jean</p>
					</Link>
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
