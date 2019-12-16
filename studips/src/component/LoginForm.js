import React from 'react'
import '../App.css';


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            password : '',
            email : '',
            birthday: '',
            hobbies : '',
            study : '',
            bio : '',
            city : '',
        };
        this.submitForm = this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.postForm = this.postForm.bind(this);
    }
    submitForm(e){
        e.preventDefault();
    };
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value,
        });
    }
    postForm (){
        const config = {
            method : "POST",
            headers : {
                "Content-type" : "application/json",
            },
            body: JSON.stringify(this.state),
        };
    const url = "http://localhost8000/posts";
    fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Votre compte à bien été créé!`);
            }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de la création de votre compte');
      });
    }
    
    
    render(){
        return(
            <div className = 'loginFormu' >
                <p>Inscription</p>
                <form onSubmit = {this.submitForm}/>
                <div className="form-data">
                    <label htmlFor="title">Prénom</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        onChange={this.onChange}
                        value={this.state.firstname}/>
                    <label htmlFor="lastname">Nom</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        onChange={this.onChange}
                        value={this.state.lastname}/>
                    <label htmlFor="pasword">Mot de passe</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}/>
                    <label htmlFor="email">Adresse Mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}/>
                    <label htmlFor="birtday">Date de naissance</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        onChange={this.onChange}
                        value={this.state.birthday}/>
                    <label htmlFor="hobbies">Tes hobbies</label>
                    <input
                        type="text"
                        id="hobbies"
                        name="hobbies"
                        onChange={this.onChange}
                        value={this.state.hobbies}/>
                    <label htmlFor="study">Tes études</label>
                    <input
                        type="text"
                        id="study"
                        name="study"
                        onChange={this.onChange}
                        value={this.state.study}/>
                    <label htmlFor="bio">A propos de toi</label>
                    <input
                        type="text"
                        id="bio"
                        name="bio"
                        onChange={this.onChange}
                        value={this.state.bio}/>
                    <label htmlFor="city">Ta ville</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={this.onChange}
                        value={this.state.city}/>
                </div>
                <div className='validButton'>
                    <button type='submit'  onClick= {this.postForm}>S'inscrire</button>
                </div>
            </div>
        )
    }
}








export default LoginForm