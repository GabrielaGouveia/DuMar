import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import logo2 from './imagens/logo2.png';
import peixe from './imagens/peixe.png';
import onda1 from './imagens/onda1.png';
import aguaviva from './imagens/aguaviva.png';
import alga from './imagens/alga.png';

function Home() {
  return (
    <div className="serch-box">
      <div className="serch-btn">
        <input type="text" className="serch-txt" placeholder="Pesquisar" />
      </div>

      <div className={styles['img-logo2']}>
      <img src={logo2} className={styles['img-logo2']} alt="DUMAR" />
      </div>
      <div className="titulo">
        <h1 className="text-primary">Consumo Consciente</h1>
      </div>
      <div className="subtitulo">
        <h2> Você sabia que 70% dos <br /> resíduos do mar brasileiro <br /> são plástico?</h2>
      </div>

      <div className={styles['img-peixe']}>
       <img src={peixe} className={styles['img-peixe']} alt="Peixinhos" />
      </div>
        <div className={styles['img-alga']}>
       <img src={alga} className={styles['img-alga']} alt="Alga" />
      </div>

      <div className={styles['img-onda1']}>
       <img src={onda1} className={styles['img-onda1']} alt="Onda" />
      </div>

      <div className={styles['img-aguaviva']}>
       <img src={aguaviva} className={styles['img-aguaviva']} alt="Agua viva" />
      </div>

     

    </div>
  );
}

export default Home;
