import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
import Loading from '../Loading/Loading';
 class AllPortfolio extends Component {

    constructor(){
        super();
          this.state={
           mydata:[],
           loading:true
          }
        }
      
        componentDidMount(){
            window.scrollTo(0, 0);
          RestClient.GetRequest(RestUrl.ProjectData).then(result=>{
            this.setState({
             mydata:result,
             mydata:result,
              loading:false
            });
          }).catch(error=>{
            this.setState({
              mydata:[],
            });
        })
      }


   
  render() {

    if (this.state.loading==true){
      return <Loading/>
    }else{
     const MyList=this.state.mydata;
        const MyListView=MyList.map(MyList=>{
          return (
            <Col lg={4} md={6} sm={12}>
                    <Card className='recentprojectcard'>
                            <Card.Img className='imgcontainerproject'  variant="top" src={MyList.img_one}/>
                            <Card.Body>
                                <Card.Title className='serviceName'>{MyList.project_name}</Card.Title>
                                <Card.Text className='servicedescription '>
                               {MyList.project_description}
                                </Card.Text>
                                <Button variant="primary" ><Link className='buttonproject' to={'/project/'+MyList.id}>View More</Link></Button>
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
 }

export default AllPortfolio
