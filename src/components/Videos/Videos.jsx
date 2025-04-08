import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player/youtube'
 class Videos extends Component {

    constructor(){
        super()
        this.state={
            show:false
        }
    }
    modalclose=()=>{
        this.setState({show:false})
    }
    modalopen=()=>{
        this.setState({show:true})
    }

  render() {
    return (
      <Fragment>
        <Container className='text-center'>


        
        <Modal show={this.state.show} onHide={this.modalclose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        
        <Modal.Body><ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.modalclose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
                <h1 className='text-center servicetitle'>VIDEOS</h1>
                <div className='buttom'></div>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <p className='text-justify servicedescription'>
                            In this project, we have utilized a variety of cutting-edge technologies to ensure a robust and efficient application. 
                            <br /><br />
                            The frontend is built using <strong>React</strong>, a popular JavaScript library for building user interfaces, which allows for the creation of reusable components and efficient rendering. 
                            <br /><br />
                            <strong>Bootstrap</strong> is employed for responsive design and styling, ensuring the application looks great on all devices. 
                            <br /><br />
                            For state management, we rely on React's built-in state and props system, simplifying data flow across components. 
                            <br /><br />
                           
                         
                        </p>
                    </Col>

                    <Col lg={6} md={6} sm={12} className='cardvideo '>
                       <FontAwesomeIcon onClick={this.modalopen} className='primeicon  ' icon={faVideo} />
                    </Col>
                </Row>
        </Container>
      </Fragment>



    )
  }
}

export default Videos
