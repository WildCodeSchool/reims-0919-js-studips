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
                <div className='tittleProfil'>
                    <Link to='/mainthread'>
                        <img src='https://zupimages.net/up/20/03/wunb.png' id='returnParameter'  alt = ''/>
                    </Link>
                    <p className='titleProfil'>Profil</p>
                </div>
                <div className='userProfil'>
                    <p className='userNameProfil'>{userData.lastname} {userData.firstname}</p>
                        <img className='userPicProfil' src ={userData.profile_pic} alt ='' />    
                </div>
                <ul>                  
                    <li><p>Bio:  </p>{userData.bio}</li><br/>
                    <li><p>Hobbies:  </p>{userData.hobbies}</li><br/>
                    <li><p>Studies:  </p>{userData.study}</li><br/>
                    <li><p>Email:  </p>{userData.email}</li>
                </ul>
                <div className='logoProfil'>
					<img src='https://zupimages.net/up/19/51/iq11.png' alt=''></img>
				</div>

            </div>
        )    
    }
}


export default Profil;
