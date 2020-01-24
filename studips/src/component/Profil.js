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
        const userData = this.props.location.state.userData
        return(
            <div className='profilPage'>
                <Link to='/mainthread'>
                    <img src='https://zupimages.net/up/20/03/wunb.png' id='returnParameter'  alt = ''/>
                </Link>
                <p className='titleProfil'>Profil</p>
                <p className='userNameProfil'>{userData.lastname} {userData.firstname}</p>
                <div className ='picDipserEpinglement'>
                    <img className='userPicProfil' src ={userData.profile_pic} alt ='' />
                </div>
                <p className='buttonProfil'>Modifier son Profil</p>
                <p className='publicationNumber'>Publication (0):</p>

            </div>
        )    
    }
}


export default Profil;
