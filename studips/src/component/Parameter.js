import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Parameter extends Component {
	constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className ='parameterMenu'>
                <Link to='/mainthread'>
                    <img src='https://zupimages.net/up/20/03/wunb.png' id='returnParameter'  alt = ''/>
                </Link>
                <p className = 'titleParameter' >Paramètres</p>
                <p className='buttonParameter'>Modifier son numéro</p>
                <p className='buttonParameter'>Modifier son Email</p>
                <p className='buttonParameter'>Modifier son mot de passe</p>
                <p className ='buttonParameter'>Dipser bloqués</p>
                <p className= 'buttonParameter'>Confidentialité</p>
                <p className ='buttonParameter'>Aide</p>
                <p className ='buttonParameter'>Mode sombre</p>
                <p className ='buttonParameter'>Désactiver son compte</p>
            </div>
        )
    }
}

export default Parameter;
