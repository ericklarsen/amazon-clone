import React from 'react'
import { HomeWrap } from './HomeSty'
import Product from './Product'

function Home() {
    return (
        <HomeWrap>
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="pic" />
            <div className="home__row">
                <Product
                    id="1111"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL._AC_UL600_SR393,600_.jpg"
                />
                <Product
                    id="1111"
                    title="TOBOS Kenwood kMix KMX84 - Grifo Mezclador para Chimenea (500 W)"
                    price={239}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41ziKxGAbnL._AC_.jpg"
                />
                
            </div>
            <div className="home__row">
                <Product
                    id="1111"
                    title="Echo Dot (3.ª generación) - Altavoz inteligente con reloj y Alexa, tela de color gris claro"
                    price={33.05}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ilNbqaGWL._AC_SL1500_.jpg"
                />
                <Product
                    id="1111"
                    title="Willful Smartwatch,Reloj Inteligente"
                    price={39.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/514Y7g-JQDL._AC_SL1000_.jpg"
                />
                <Product
                    id="1111"
                    title="Nuevo Apple iPad Pro (de 11 Pulgadas, con Wi-Fi + Cellular y 512 GB)"
                    price={1379}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81JbokPAeiL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1111"
                    title="TV SAMSUNG 49 UE49RU7305 UHD STV CURVO SLIM 1400 Clase de eficiencia energética A+"
                    price={199.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/514QDB7aEsL._AC_.jpg"
                />
            </div>
        </HomeWrap>
    )
}

export default Home
