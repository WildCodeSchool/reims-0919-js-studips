import React, {Component} from 'react';
import '../App.css'

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
					<img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKVvQJdRW6Kj8X6iO6l5YDn-fU_5ic04qB6udb_fMZhS2qycz&s' alt = 'profil'/>
					<p>AIMAR , Jean</p>
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
				<hr />
				<button>Enregistrement</button>
				<button>Paramètres</button>
			</div>
		)
	}
}

export default Menu;