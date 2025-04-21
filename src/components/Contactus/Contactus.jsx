import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
import Loading from '../Loading/Loading';
 class Contactus extends Component {
  constructor(){
    super();
    this.state={
      address:"",
      phone:'',
      email:'',
      loading:true
    }
  }
  componentDidMount(){
    RestClient.GetRequest(RestUrl.FooterData).then(result=>{
      this.setState({
        address:result[0]['address'],
        phone:result[0]['phone'],
        email:result[0]['email'],
        loading:false
     
      })
    })
  }

  sendContact(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let massage=document.getElementById('massage').value;
    
    let jsonObject={name:name,email:email,massage:massage};
    RestClient.PostRequest(RestUrl.AddContact,JSON.stringify(jsonObject)).then(result=>{
    
      alert(result);
    }).catch(error=>{
      alert("Error");
    })

  }

  render() {

    if (this.state.loading==true){
      return <Loading/>
    }

    else{
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12} >

                <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control id='name' type="text" placeholder="Enter you Name" />
                            <Form.Text className="text-muted">
                            Enter you Name to contact us
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control id='email' type="email" placeholder='Enter you Email'  />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Your Massage</Form.Label>
                            <textarea id='massage' className="form-control" rows="3" placeholder='Enter your Massage' ></textarea> 
                        </Form.Group>
                        
                        <Button variant="primary" onClick={this.sendContact}>
                            Submit
                        </Button>
                </Form>
                </Col>

                <Col lg={6} md={6} sm={12} className='text-center'>

                <p className='contactusdescription' style={{ textAlign: 'justify' }}>
                    Address: {this.state.address} <br/>
                    Phone: {this.state.phone} <br/>
                    Email:{this.state.email} <br/>
                    Website: www.abood.com<br/>
                </p>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
 }

export default Contactus
