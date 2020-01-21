import React from 'react';
import {Link} from 'react-router-dom';


const Library = () => {
    return(
        <div className ='libraryPage'>
            <Link to='/mainthread'>
                <img src='https://zupimages.net/up/20/03/wunb.png' id='returnParameter'  alt = ''/>
            </Link>
            <p className= 'titlePageLibrary'>Bibliothèque</p>
            <p className ='registerPost'>Posts enregistrés</p>
        </div>
    )
}

export default Library;
