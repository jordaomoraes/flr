import React from "react";

import styles from './styles.module.scss'
// Página que contém os componentes do café crú
export default function Contabilidade() {
  return <>

    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.cardsHeader}>
          <img src="/images/img-empresas.png" alt="logo FLR"></img>
          <h3>EMPRESAS</h3>
        </div>
        <p> {">"} Aberturas</p>
        <p> {">"} Encerramentos</p>
        <p> {">"} Acompanhamento Mensal</p>
      </div>


      <div className={styles.cards}>
        <div className={styles.cardsHeader}>
          <img src="/images/img-casas.png" alt="logo FLR"></img>
          <h3>REGULARIZAÇÃO DE IMÓVEIS</h3>
        </div>
        <p> {">"} Aberturas</p>
        <p> {">"} Encerramentos</p>
        <p> {">"} Acompanhamento Mensal</p>
      </div>

      <div className={styles.cards}>

        <div className={styles.cardsHeader}>
          <img src="/images/img-autonomos.png" alt="logo FLR"></img>
          <h3>PARA AUTONOMOS</h3>
        </div>
        <p> {">"} Carnê Leão</p>
        <p> {">"} Regularização de CPF</p>
        <p> {">"} Imposto de Renda</p>
        <p> {">"} Alvarás e Licenças</p>
      </div>

      <div className={styles.cards}>
        <div className={styles.cardsHeader}>
          <img src="/images/img-mei.png" alt="logo FLR"></img>
          <h3>MEI</h3>
        </div>
        <p> {">"} Aberturas</p>
        <p> {">"} Regularização</p>
        <p> {">"} Parcelamentos</p>
        <p> {">"} Encerramentos</p>
        <p> {">"} Desemquadramentos</p>
        <p> {">"} Acompanhamento Mensal</p>
      </div>

      <div className={styles.cards}>
        <div className={styles.cardsHeader}>
          <img src="/images/img-ir.png" alt="logo FLR"></img>
          <h3>INVESTIDORES</h3>
        </div>
        <p> {">"} Imposto de Renda para Investidores</p>
      </div>



    </div>


  </>;



};


