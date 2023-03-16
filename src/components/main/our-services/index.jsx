import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import ServicesImage from '../../../assets/images/img_service.png'
import './style.scss'
import Ceklist from '../../../assets/images/ceklist.png'

const OurServices = () => {
  return (
    <section id='our-services'>
        <Container >
            <Row style={{alignItems:"center"}}>
                <Col lg="6">
                    <div className="image-services">
                        <img src={ServicesImage} alt="Best Car Rental" />
                    </div>
                </Col>
                <Col lg="6">
                    <div className="services-content">
                        <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <ul>
                            <li>
                                <img src={Ceklist} alt="" />
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </li>
                            <li>
                                <img src={Ceklist} alt="" />
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </li>
                            <li>
                                <img src={Ceklist} alt="" />
                                Sewa Mobil Jangka Panjang Bulanan
                            </li>
                            <li>
                                <img src={Ceklist} alt="" />
                                Gratis Antar - Jemput Mobil di Bandara
                            </li>
                            <li>
                                <img src={Ceklist} alt="" />
                                Layanan Airport Transfer / Drop In Out
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default OurServices