import React from 'react';
import Topo from '../../Topo';
import Rodape from '../../Rodape';

import '../Home/style.css';

function Home () {
    return(
       <section>
        < Topo/>
         <main>
            <section className='banner'>           
                <div className='texto-banner'>
                    <h1>SORVETE ARTESANAL</h1>
                </div>         
            </section>
            <section>
                <div className="sabores">
                    <img className="sabores-imagem"  src='assets/banner-sabores.jpg'/>
                    <article>
                        <h2>Nossos Sabores</h2>
                        <h3>Novos e Deliciosos</h3>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. 
                            Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </article>
                </div>
            </section>
            <section>
                <div className="eventos">
                    <article>
                        <h2>NOSSOS EVENTOS</h2>
                        <h3>Delicias com sorvete!</h3>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! 
                            Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </article>
                     <img className="eventos-imagem" src='assets/eventos-image.jpg'/>
                </div>
            </section>
            <section>
                <div className="sobre">
                    <img className="sobre-imagem" src='assets/sobre-image.jpg'/>
                    <article>
                        <h2>SOBRE NÓS</h2>
                        <h3>Alegria em cada casquinha!</h3>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. 
                            Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </article>                     
                </div>
            </section>
         </main>
        <Rodape />
       </section>
      
    );
}

export default Home;