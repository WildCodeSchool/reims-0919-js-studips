import React from 'react'
import '../App.css';
import axios from 'axios';


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nextPage : true,
            newUser : {
                firstname : '',
                lastname : '',
                phone: '',
                password : '',
                confirmedPassword: '',
                email : '',
                birthday: '',
                hobbies : '',
                study : '',
                bio : '',
                city : '',
            }  
        };
        
        this.handleChangeNewUser = this.handleChangeNewUser.bind(this);
        this.postForm = this.postForm.bind(this);
        this.secondPageAppear = this.secondPageAppear.bind(this);
        this.returnFonction = this.returnFonction.bind(this);
    }
   
    handleChangeNewUser(event) {
		const propertyName = event.target.name
		const newUser = this.state.newUser
		newUser[propertyName] = event.target.value
		this.setState({ newUser: newUser })
	}
    postForm (e){
        e.preventDefault();
        let newUserData = JSON.stringify ({
            firstname : this.state.newUser.firstname,
            lastname : this.state.newUser.lastname,
            phone : this.state.newUser.phone,
            email : this.state.newUser.email,
            password : this.state.newUser.password,
            birthday : this.state.newUser.birthday,
            hobbies : this.state.newUser.hobbies,
            study: this.state.newUser.study,
            bio : this.state.newUser.bio,
            city : this.state.newUser.city
        });
    axios
			.post('http://localhost:8000/register', newUserData , {headers:{"Content-Type" : "application/json"}})
			.then(res => console.log(res))
			.catch(err => console.log(err))
    }
    secondPageAppear = () => {
         this.setState({
             nextPage: false
         })
    }
    returnFonction= () => {
        this.setState({
            nextPage: true
        })  
    }
    
    render(){
        return(
            <div className = 'loginFormu' >
                
                {this.state.nextPage ?
                <div className= 'loginFormu'>
                <p className='titlePage'>Création d'un compte</p>
                <form onSubmit = {this.postForm}/>
                <div id ='firstPageInscription'>
                    <div className="form-data">   
                        <input placeholder='Prénom'
                            type="text"
                            id="firstname"
                            name="firstname"
                            onChange={this.handleChangeNewUser}
                            value={this.state.firstname}/>
                        
                        <input placeholder='Nom'
                            type="text"
                            id="lastname"
                            name="lastname"
                            onChange={this.handleChangeNewUser}
                            value={this.state.lastname}/>
                         <input placeholder='Numéro de téléphone'
                            type="text"
                            id="phone"
                            name="phone"
                            onChange={this.handleChangeNewUser}
                            value={this.state.phone}/>
                        <input placeholder='Email'
                            type="email"
                            id="email"
                            name="email"
                            onChange={this.handleChangeNewUser}
                            value={this.state.email}/>
                        <input placeholder='Mot de passe'
                            type="password"
                            id="password"
                            name="password"
                            onChange={this.handleChangeNewUser}
                            value={this.state.password}/>
                        
                        <input placeholder='Confirmez le mot de passe'
                            type="password"
                            id="confirmedPassword"
                            name="confirmedPassword"
                            onChange={this.handleChangeNewUser}
                            value={this.state.confirmedPassword}/>
                        
                        
                        <div className='nextButton'>
                            <button onClick = {this.secondPageAppear}>Suivant</button>
                        </div>
                        
                    </div>
                </div> 
                </div>
                :   
                    <div id='secondPageInscription'>
                        <img src='https://zupimages.net/up/19/51/wege.png' id = 'return' onClick= {this.returnFonction} alt = ''></img>
                        <div className="form-dataSecond">
                            
                            <input placeholder = 'Date de naissance'
                                type="date"
                                id="birthday"
                                name="birthday"
                                onChange={this.handleChangeNewUser}
                                value={this.state.birthday}/>
                            
                            <input placeholder = 'Hobbies'
                                type="text"
                                id="hobbies"
                                name="hobbies"
                                onChange={this.handleChangeNewUser}
                                value={this.state.hobbies}/>
                            
                            <input placeholder = 'Etudes'
                                type="text"
                                id="study"
                                name="study"
                                onChange={this.handleChangeNewUser}
                                value={this.state.study}/>
                           
                            <input placeholder = 'Un peu plus sur toi'
                                type="text"
                                id="bio"
                                name="bio"
                                onChange={this.handleChangeNewUser}
                                value={this.state.bio}/>
                            
                            <input placeholder = 'Ville'
                                type="text"
                                id="city"
                                name="city"
                                onChange={this.handleChangeNewUser}
                                value={this.state.city}/>
                
                            <div className='validButton'>
                                <button type='submit'  onClick= {this.postForm}>S'inscrire</button>
                            </div>
                        </div>
                    </div>
                    
                }
            </div>
        
        )
    }
}








export default LoginForm
