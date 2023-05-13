import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

import Home from '../Paginas/Home';
import Sabores from '../Paginas/Sabores';
import Sorveteria from '../Paginas/Sorveteria';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path ='/' element={<Home />}/>
                <Route path ='/Sabores' element={<Sabores />}/>
                <Route path ='/Sorveteria' element={<Sorveteria />}/>                
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;