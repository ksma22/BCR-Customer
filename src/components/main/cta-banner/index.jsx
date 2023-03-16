import React from 'react'
import { Container, Button } from 'reactstrap'
import './style.scss'

const CTABanner = () => {
  return (
    <section id='cta-banner'>
        <Container>
            <div className="banner-content">
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est reprehenderit asperiores distinctio qui nobis nihil deleniti ipsam! Accusamus quod ex numquam voluptatem ducimus consequuntur aspernatur excepturi quam sint! Voluptatem.</p>
                <Button className='btn' to={'https://www.figma.com'} >Mulai Sewa Mobil</Button>
            </div>
        </Container>
    </section>
  )
}

export default CTABanner