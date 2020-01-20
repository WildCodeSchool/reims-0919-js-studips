import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Profil extends  Component{
	constructor(props){
	super(props)
		this.state={
			
		}
	}
    render(){
        return(
            <div className={props.location.state.isLightMode ? 'profilPage' : 'dark_profilPage'}>
                <Link to='/mainthread'>
                    <img src='https://zupimages.net/up/20/03/wunb.png' id='returnParameter'  alt = ''/>
                </Link>
                <p className='titleProfil'>Profil</p>
                <p className='userNameProfil'>AIMAR Jean</p>
                <div className ='picDipserEpinglement'>
                    <img className='userPicProfil' src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKVvQJdRW6Kj8X6iO6l5YDn-fU_5ic04qB6udb_fMZhS2qycz&s' alt ='' />
                    <div className ='dipserDiv'>
                        <p>45</p>
                        <p>Dipsers</p>
                    </div>
                    <div className='epinglementDiv'>
                        <p>87</p>
                        <p>Epinglement</p>
                    </div>
                </div>
                <p className='buttonProfil'>Modifier son Profil</p>
                <p className='publicationNumber'>Publication (0):</p>

            </div>
        )    
    }
}


export default Profil;
