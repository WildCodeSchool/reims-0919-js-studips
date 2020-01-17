import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import '../darkApp.css'

const Parameter = (props) => {
        return(
            <div className = {props.location.state.isLightMode ? 'parameterPage' : 'dark_parameterPage'}>
                
                <Link to='/mainthread'>
                    <img src='https://zupimages.net/up/20/03/wunb.png' id='returnParameter'  alt = ''/>
                </Link>
                <p className = 'titleParameter' >Paramètres</p>
                <p className={props.location.state.isLightMode? 'buttonParameter' : 'dark_buttonParameter'}>Modifier son numéro</p>
                <p className={props.location.state.isLightMode? 'buttonParameter' : 'dark_buttonParameter'}>Modifier son Email</p>
                <p className={props.location.state.isLightMode? 'buttonParameter' : 'dark_buttonParameter'}>Modifier son mot de passe</p>
                <p className ={props.location.state.isLightMode? 'buttonParameter' : 'dark_buttonParameter'}>Dipser bloqués</p>
                <p className= {props.location.state.isLightMode? 'buttonParameter' : 'dark_buttonParameter'}>Confidentialité</p>
                <p className ={props.location.state.isLightMode? 'buttonParameter' : 'dark_buttonParameter'}>Aide</p>
                <p className ={props.location.state.isLightMode? 'buttonParameter' : 'dark_buttonParameter'}>Mode sombre</p>
                <p className ={props.location.state.isLightMode? 'buttonParameter' : 'dark_buttonParameter'}>Désactiver son compte</p>
            </div>
        )
    }


export default Parameter;
