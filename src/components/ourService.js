import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../App.css'
import ficheck from '../icon/ficheck.svg'

export default class OurService extends Component {
  render() {
    return (
      <div id="ourService">
        <Row className="d-flex justify-content-center serv">
            <Col md={6} className="text-center">
                <img className="girl" src="assets/images/img_service.png" alt="girl"></img>
            </Col>
            <Col md={5} style ={{ padding:0 }}>
                <h2 className="serviceHead2">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p className='serviceText2'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <div className="serviceli"><img className="serviceItem" src={ficheck} alt="check"></img> Sewa Mobil Dengan Supir di Bali 12 Jam</div> 
                <div className="serviceli"><img className="serviceItem" src={ficheck} alt="check"></img> Sewa Mobil Lepas Kunci di Bali 24 Jam</div> 
                <div className="serviceli"><img className="serviceItem" src={ficheck} alt="check"></img> Sewa Mobil Jangka Panjang Bulanan</div> 
                <div className="serviceli"><img className="serviceItem" src={ficheck} alt="check"></img> Gratis Antar - Jemput Mobil di Bandara</div> 
                <div className="serviceli"><img className="serviceItem" src={ficheck} alt="check"></img> Layanan Airport Transfer / Drop In Out</div> 
                
                 
                
                
            </Col>
        </Row>



      </div>
    )
  }
}
