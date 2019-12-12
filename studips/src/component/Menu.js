import React, {Component} from 'react';
import '../App.css'

class Menu extends Component{
	render(){
		return(
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
	}
}

export default Menu;