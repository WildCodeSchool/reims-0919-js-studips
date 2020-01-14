import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Welcome = () => (
    <div className = 'welcome'>
        <h1>Bienvenue sur Studips</h1>
        <img src ='https://zupimages.net/up/19/51/iq11.png' ></img>
        <Link className= 'bouton' to="/login">Suivant</Link>
    </div>
)


export default Welcome