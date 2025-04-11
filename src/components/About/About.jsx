import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../assets/images/face.png'
import { init } from 'ityped'
 class About extends Component {
  
   

    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['I am a Software Engineer with a passion for creating innovative solutions', 'I have a strong background in web development!'] });
        window.scrollTo(0, 0);
    }

    
  render() {
    return (
      <Fragment>
        <Container>
        <h1 className='text-center servicetitle'>ABOUT ME</h1>
        <div className='buttom'></div>
            <Row>
                <Col lg={6} md={6} sm={12} className='AboutImageBack text-center'>
                    <img className='AboutImage' src={face} alt="Face" />
                </Col>
                <Col  lg={6} md={6} sm={12} className='text-center'>
                    <div className='AboutText'>
                        <p className='AboutText1'>
                            HEY I AM 
                        </p>
                        <p className='AboutText2'> 
                            ABOOD ALMAHROUQ
                        </p>
                        <p className='AboutText3' id="myElement">
                            
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default About
