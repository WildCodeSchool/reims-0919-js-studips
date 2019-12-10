import React, {Component} from 'react';
import '../App.css'

class Menu extends Component{
	constructor(){
		super();

		this.state = {
			showMenu:false,
		}
		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu (event){
		event.preventDefault();

		this.setState({showMenu : true}, ()=>{
			document.addEventListener('click', this.closeMenu);
		});
	} 
	closeMenu(){
		this.setState({showMenu: false },()=>{
			document.removeEventListener('click',this.closeMenu);
		});
	}
	
	render(){
		return(
			<div>
				<button id = "menuBoutton" onClick={this.showMenu}>
					Show menu
				</button>
				{this.state.showMenu
				?(
				<div className = 'menu'>
					<div className = 'profile'>
						<img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKVvQJdRW6Kj8X6iO6l5YDn-fU_5ic04qB6udb_fMZhS2qycz&s' alt = 'profil'/>
						<p>AIMAR , Jean</p>
					</div>
					<button>Stages / Jobs</button>
					<button>Logements</button>
					<button>Events / Sorties</button>
					<button>Cours</button>
					<button>Fournitures</button>
					<hr></hr>
					<button>Modifier mon profil</button>
					<button>Enregistrement</button>
					<button>Paramètres</button>
				</div>
				)
				:(
					null
				)
				}
			</div>
		)
	}
}

export default Menu;