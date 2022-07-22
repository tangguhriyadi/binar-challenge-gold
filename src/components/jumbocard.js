import React, { Component } from 'react'
import {Container, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class JumboCard extends Component {
  render() {
    const sizeH = {
        fontWeight:"700",
        fontSize:"36px",
        lineHeight:'54px',
        color:"white"
    }
    const sizeP = {
        fontWeight:"700",
        fontSize:"14px",
        lineHeight:'20px',
        color:"white",
        maxWidth:"468px",
        margin:"auto"
    }
    return (
      <Container className="mt-5 text-center">
        {<Card md={12} className="p-5" style={{backgroundColor:"#0D28A6"}}>
        <Card.Body>
          <Card.Text className="text-md-center" style={sizeH}>
            Sewa Mobil di (Lokasimu) Sekarang
          </Card.Text>
          <Card.Text className="text-md-center" style={sizeP}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Card.Text>
        </Card.Body>
        <Button
            className="btn-sewa mt-5 jumbo"
            as={Link}
            to='/search'
            style={{margin:"auto"}}
            >Mulai Sewa Mobil</Button>
      </Card>}
      
      </Container>
    )
  }
}
