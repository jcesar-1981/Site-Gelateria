
import React from 'react';
import {Link} from 'react-router-dom';

import '../Topo/style.css';

function Topo (){
    return(
       <header>
            <div className="limitar-secao">
                <img src='assets/logo.png'/>
                <nav>
                    <Link className="link-topo" to='/'> Home</Link>
                    <Link className="link-topo" to='/Sabores'> Sabores</Link>    
                    <Link className="link-topo" to='/Sorveteria'> Sobre</Link>  
                </nav>  
            </div>                  
        </header>
    );
}

export default Topo;