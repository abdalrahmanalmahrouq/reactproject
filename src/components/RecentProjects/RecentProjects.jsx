import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
 class RecentProjects extends Component {
  constructor(){
    super();
      this.state={
       mydata:[]
      }
    }
  
    componentDidMount(){
      RestClient.GetRequest(RestUrl.ProjectHome).then(result=>{
        this.setState({
         mydata:result,
        });
      }).catch(error=>{
        this.setState({
          mydata:[],
        });
    })
  }

  render() {
    const MyList=this.state.mydata;
    const MyListView=MyList.map(MyList=>{
      return (
        <Col lg={4} md={6} sm={12}>
                <Card className='recentprojectcard'>
                        <Card.Img variant="top" src={MyList.img_one}/>
                        <Card.Body>
                            <Card.Title className='serviceName'>{MyList.project_name}</Card.Title>
                            <Card.Text className='servicedescription '>
                           {MyList.project_description}
                            </Card.Text>
                            <Button variant="primary" ><Link className='buttonproject' to={'/projectdetails'}>View More</Link></Button>
                        </Card.Body>
                </Card>
                </Col>
      )
    })
    return (
      <Fragment>
        <h1 className='text-center servicetitle'>OUR PROJECTS</h1>
        <div className='buttom'></div>
        <Container className='text-center'>
            
            <Row>
               
                {MyListView}
                
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RecentProjects
