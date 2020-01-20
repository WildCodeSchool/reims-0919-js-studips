import React from 'react'
import '../App.css';


class SearchModal extends React.Component{
    constructor(props){
        super(props);
            this.state={

            }
    }

    render(){
        return(
            <div className = 'search'>
                <div className='inputPeople'>
                    <input
                        onChange = {this.props.handleChangeUser}
                        type="text"
                        value= {this.props.user}
                        placeholder="Recherche un utilisateur"/>
                </div>
                <div className='inputCampus'>
                    <input
                        type="text"
                        placeholder="Recherche un campus"/>
                </div>
               
               
            </div>
        )
    }
}

export default SearchModal;