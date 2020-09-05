import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Book from './../../../assets/img/book.png'
import BorderImage from './../../../assets/img/border-img.png'

import { FiShoppingCart } from 'react-icons/fi'

import Bounce from 'react-reveal/Bounce'

import './index.css'

export default function Header() {

    return (
        <div className="Header">
            <Container>
                <div className="container-header">
                    <div className="left">
                        <Bounce left>
                            <div className="container-text">
                                <h1>Cronograma Capilar</h1>
                                <h2>Crescimento Acelerado!</h2>
                                <h5>Aprenda a fortalecer o seu cabelo em casa com um cronograma capilar completo!</h5>
                                {/* <h3>Adquira já o seu e comece agora mesmo!</h3> */}
                                <p>
                                    O ebook <span> <b>Cronograma Capilar para Crescimento Acelerado</b> </span> foi desenvolvido para ajudar no tratamento dos fios e aceleração do crescimento. <br />
                                   Nele é possível encontrar valiosas dicas, técnicas e informações de como tratar e recuperar o fio dos cabelos com métodos naturais sem precisar ir ao salão!
                                    <br />Aplicando as técnicas corretamente é possível notar resultados já nas primeiras semanas!!!
                                 </p>
                                <a className="btn btn-primary" href="https://pay.hotmart.com/W38843047X" target="_blank">
                                    <FiShoppingCart /> Compre agora
                                 </a>
                            </div>
                        </Bounce>
                    </div>

                    <div className="right">
                        <div className="container-image">
                            <Bounce right>
                                <img src={Book} alt="ebook" />
                            </Bounce>
                        </div>
                    </div>
                </div>
            </Container>
            <img src={BorderImage} alt="border" className="img-fluid img-border" />
        </div>
    )
}