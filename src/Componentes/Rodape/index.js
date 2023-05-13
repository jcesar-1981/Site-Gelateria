import React from "react";
import '../Rodape/style.css';


function Rodape (){
    return(
        <footer>
            <div className="container-contatos">
                <div className="logo">
                    <img src='assets/logo.png'/>
                </div>
                <div className="contatos">
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="contatos">
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className="contatos">
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
                </div>
                <div className="copyright">
                    <p>Gelateria. Orgulhosamente desenvolvido por "Júlio César Ramos"</p>
                </div>
            
        </footer>
    );
}

export default Rodape;
