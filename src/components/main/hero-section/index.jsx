import React from 'react'
import './style.scss'
import { Button, Col, Container } from 'reactstrap'
import HeroImage from '../../../assets/images/img_car.png'

const HeroSection = () => {
  return (
    <section id='hero-section'>
        <Container>
            <Col lg='6' md="6">
                <div className="hero-content">
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <Button className='btn' to={'https://www.figma.com'} >Mulai Sewa Mobil</Button>
                </div>
            </Col>
        </Container>
        <div className="hero-thumbnail">
            <img src={HeroImage} alt="Mobil" />
        </div>
    </section>
  )
}

export default HeroSection