import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Consumo.module.css';
import icon from './imagens/icons8-ajuda-50.png';
import logo1 from './imagens/logo1.png';
import logo2 from './imagens/logo2.png';
import foca from './imagens/Foca.jpeg';
import tartaruga from './imagens/Tartaruga.jpeg';
import peixes from './imagens/peixes.png';
import lixo from './imagens/lixo.png';






const Consumo = () => {

return (
<div>
<section style={{ backgroundColor: 'black', color: 'white' }} className={styles['background-section']}>

<div className='container-fluid p-0' >
        
        <div className={styles['nav-bar']}>  
       
       <nav className="navbar navbar-light bg-light"> 
          
        <a className="navbar-brand" href="#">
            <div className='logos'>
                    <img src={logo1} className={styles['img-logo1']} alt="DUMAR" />
                    <img src={logo2} className={styles['img-logo2']} alt="DUMAR" />
            </div>
        </a>

        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
            <form className="d-flex" role="search">
            <input className={styles['barra']} class="form-control" type="search" placeholder="Pesquisar" aria-label="Search"/>
            <button className={styles['lupa']} class="btn p-0" type="submit">
            <i className="bi bi-search">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </i>
        </button>
        </form>
             </div>
        </nav>
  
          <div className={styles['pessoa-carro']}>

          <button type="button" class=" btn-secondary btn-sm" className={styles['entrar']}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" color='white'> 
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
            <p>Entrar</p>
          </button>
  
          <button type="button" class="btn-secondary btn-sm"  className={styles['carrinho']} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16" color='white'>
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>
          </button>
          </div>
          
       </nav>


     <nav className="navbar-expand-lg navbar-light m-0 p-0 ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarNavDropdown" className={styles['personalize-bg']}>
         <ul className="navbar-nav ms-5 gap-4 ">
            <li className="nav-item active ">
                <a  className="nav-link" href="#">Quem somos <span class="sr-only"></span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contato</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Consumo consciente</a>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" 
                href="#" id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">Categorias</a>
        <div className="dropdown-menu" >
          <a className="dropdown-item" href="#">Peixes</a>
          <a className="dropdown-item" href="#">Moluscos</a>
          <a className="dropdown-item" href="#">Crustáceos</a>
        </div>
            </li>

        </ul>
      </div>
    </nav>

  </div>
  </div>
  
 <section>
  <div className='container-consumo'style={{ display: 'flex', alignItems: 'flex-start' }}> 
    <h4>CONSUMO CONSCIENTE!</h4>
  </div>   

    
 <div className="row px-5 gap-5 " style={{ position: "absolute", top: "210%", left:140, transform: "translateY(-50%)"}}>
   <div className="col-md-3"style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center"}}>
    <img className={styles['img-inter']} src={icon} alt="" />
   <div className={styles['texto-sobre']}>O que é?</div>
   <p>Consumo consciente é fazer escolhas de compra considerando o impacto ambiental e social dos produtos. Envolve preferir opções sustentáveis e éticas para promover um estilo de vida mais responsável.</p>
   </div>

   <div className="col-md-3 "style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center" }}>
   <img className={styles['img-inter']} src={icon} alt="" />
   <div className={styles['texto-sobre']}>Como?</div>
   <p>Pratique o consumo consciente ao optar por produtos duráveis e sustentáveis. Reduza o desperdício ao reciclar e reutilizar sempre que possível.</p>
   </div>

   <div className="col-md-3"style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center"}}>
    <img className={styles['img-inter']} src={icon} alt="" />
   <div className={styles['texto-sobre']}>Porque?</div>
   <p>Pratique o consumo consciente ao optar por produtos duráveis e sustentáveis. Reduza o desperdício ao reciclar e reutilizar sempre que possível.</p>
   

  </div>

  
  <section>
  <div className='container-poluição'style={{ display: 'flex', alignItems: 'flex-start'}}> 
   <h1>POLUIÇÃO!</h1>
   <p>Nos mares do nosso planeta, um drama silencioso se desenrola diariamente. <br />Milhões de toneladas de plástico invadem nossos oceanos, transformando a <br />majestosa vastidão azul em um trágico cenário de poluição. A vida marinha,<br /> antes vibrante, agora luta pela sobrevivência em um mar de detritos<br /> plásticos. É hora de mudar esse enredo. Juntos, podemos recusar o uso de <br />plástico descartável, abraçar alternativas sustentáveis e restaurar a beleza <br />dos oceanos que são a essência da vida na Terra. O futuro do mar está em<br /> nossas mãos. #PareComOPlástico, #SalveOsOceanos.</p>
   <img className={styles['img-tartaruga']} src={tartaruga} alt="" style={{ width: '280px', height: '150px' }}/>
   <img className={styles['img-foca']} src={foca} alt="" style={{ width: '280px', height: '150px' }}/>

        
  </div>
  </section>

  <section>
  <div className='container-pesca'style={{ display: 'flex', alignItems: 'flex-start'}}> 
   <h1 style={{ whiteSpace: 'nowrap' }}>PESCA PROIBIDA!</h1>
   <p>Nos vastos oceanos do mundo, muitas espécies de peixes<br /> enfrentam a ameaça iminente da extinção devido à pesca<br /> insustentável e à degradação do ambiente marinho.Entre essas <br />espécies estão aquelas cuja pesca é proibida devido à necessidade<br /> urgente de preservação.<br />
   Medidas rigorosas de proibição da pesca são implementadas para<br /> tentar reverter o declínio dessas populações. No entanto, muitas<br /> vezes, a fiscalização inadequada e a demanda persistente por essas<br /> espécies contribuem para a pesca ilegal e o descumprimento das<br /> regulamentações.<br />
   O consumo desenfreado de peixes ameaçados de extinção <br />alimenta um ciclo perigoso. Além da redução das populações <br />dessas espécies, há impactos significativos na biodiversidade<br /> marinha, desequilibrando ecossistemas e prejudicando outras<br /> formas de vida marinha.<br />
   Além disso, a perda de peixes-chave na cadeia alimentar marinha <br />pode ter consequências graves para as comunidades humanas que <br />dependem desses recursos para alimentação e subsistência.</p>

   <div className="container mt-4">
  <div className="row">
    <div className="col-md-4 " >
      <div className="card" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "15px",display: "flex", flexDirection: "column", alignItems: "center", left:200, top:'30%', width:350, height:400 }}>
      
        <div className="card-body d-flex flex-column align-items-start">
          <h1 className="card-title font-weight-bold text-dark custom-text-size text-center "  style={{
          textAlign: "center", margin:"0 auto"}}>
          ESPÉCIES SERIAMENTES AMEAÇADAS DE <br />EXTINÇÃO <br />
          <strong><span class="text-danger">!!PESCA PROIBIDA!!</span></strong>
          </h1>
        </div>
        <img className={styles['img-peixes']} src={peixes} alt="" ></img>
      </div>
    </div>

    

    
  </div>
</div>


              
  </div>
  </section>

  <section>
   <div>
   <div className='container-pesca'style={{ display: 'flex', alignItems: 'flex-start'}}> 
    <h1>DICAS DE PRESERVAÇÃO</h1>
    <div className="img-dicas">
   

   
   
   </div>
   
  


   </div>
   </div>

  </section>

  
  </div>
  </section>
  

  

  


</section>




</div>


);
}
export { Consumo };

