import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class connectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
        };
        this.onChange = this.onChange.bind(this);
        this.postForm = this.postForm.bind(this);
    }
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
        }
    
    render(){
        return(
            <div className = 'conectForm' >
                <div className = 'form'>
                    <p className = 'titleConnection'>Se connecter</p>
                    
                    <input placeholder="Tel ou email"
                        type='email'
                        id='email'
                        name='email'
                        onChange={this.onChange}
                        value={this.state.email}/>
                    
                    <input placeholder='Mot de passe'
                        type='password'
                        id='password'
                        name='password'
                        onChange={this.onChange}
                        value={this.state.password}/>
                    <div className = 'bottomPage'>

                        <Link className='validationButton' type='submit' to='/mainthread'  onClick= {this.postForm}>Valider </Link>
                        <p className = 'forgotPass'>Mot de passe oublié?</p>
                        <p className = 'or'>Ou</p>
                        <Link className='loginButton' type = 'button' to='/login' >Créer un compte</Link>
                    </div>
                 </div>
            </div>
        )
    }
}
export default connectForm