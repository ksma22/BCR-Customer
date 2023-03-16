import React from 'react'
import './style.scss'
import IconTime from './assets/icon_24hrs.png'
import IconComplete from './assets/icon_complete.png'
import IconPrice from './assets/icon_price.png'
import IconProfessional from './assets/icon_professional.png'
import { Row, Container, Col } from 'reactstrap'

const WhyUs = () => {
  return (
    <section id='why-us'>
        <Container>
            <div className="why-content">
                <h1>Why Us?</h1>
                <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>            
            <Row>
                <Col lg='3' md='6' className='why-border'>
                    <div className="why-card">
                        <img src={IconComplete} alt="Icon Complete" />
                        <h1>Mobil Lengkap</h1>
                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                </Col>
                <Col lg='3' md='6' className='why-border'>
                    <div className="why-card">
                        <img src={IconPrice} alt="Icon Price" />
                        <h1>Harga Murah</h1>
                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                </Col>
                <Col lg='3' md='6' className='why-border'>
                    <div className="why-card">
                        <img src={IconTime} alt="Icon Time" />
                        <h1>Layanan 24 Jam</h1>
                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                </Col>
                <Col lg='3' md='6' className='why-border'>
                    <div className="why-card">
                        <img src={IconProfessional} alt="Icon Professional" />
                        <h1>Sopir Profesional</h1>
                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default WhyUs