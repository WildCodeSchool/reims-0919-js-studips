import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


class ProfilCard extends  Component{
	constructor(props){
	super(props)
		this.state={
			
		}
	}
    render(){
        
        const postData = this.props.location.state.postData
       
        return(
            <div className='profilPage'>
                <div className='tittleProfil'>
                    <Link to='/mainthread'>
                        <img src='https://zupimages.net/up/20/03/wunb.png' id='returnParameter'  alt = ''/>
                    </Link>
                    <p className='titleProfil'>Profil</p>
                    
                </div>
                <div className='userProfil'>
                    <p className='userNameProfil'>{postData.lastname} {postData.firstname}</p> 
                         <img className='userPicProfil' src ={postData.profile_pic} alt ='' />    
                </div>
                <button className='addPeople'>
                    Ajouter aux contacts
                </button>
                <ul>                  
                    <li><p>Bio:  </p>{postData.bio}</li><br/>
                    <li><p>Hobbies:  </p>{postData.hobbies}</li><br/>
                    <li><p>Studies:  </p>{postData.study}</li><br/>
                    <li><p>Email:  </p>{postData.email}</li>
                </ul>


            </div>
        )    
    }
}


export default ProfilCard;