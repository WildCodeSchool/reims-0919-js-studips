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
            <div className='profilPage'>
                <Link to='/mainthread'>
                    <img src='https://zupimages.net/up/20/03/wunb.png' id='returnParameter'  alt = ''/>
                </Link>
                <p className='titleProfil'>Profil</p>
                <p className='userNameProfil'>AIMAR Jean</p>
                <div className ='picDipserEpinglement'>
                    <img className='userPicProfil' src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKVvQJdRW6Kj8X6iO6l5YDn-fU_5ic04qB6udb_fMZhS2qycz&s' alt ='' />
                    <div className='dipsEpin'>
                        <div className ='dipserDiv'>
                            <p>Dipsers:  </p>
                            <p className='number'>45</p>
                        </div>
                        <div className='epinglementDiv'>
                            <p>Dipsés:  </p>
                            <p className='number'>87</p>
                        </div>
                    </div>
                </div>
                <p className='buttonProfil'>Modifier son Profil</p>
                <p className='publicationNumber'>Publication (0):</p>

            </div>
        )    
    }
}


export default Profil;
