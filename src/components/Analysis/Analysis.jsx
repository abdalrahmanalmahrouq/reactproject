import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
import parse from 'html-react-parser';
 class Analysis extends Component {

  constructor(){
    super();
      this.state={
       data:[],
       tech_description:'',
      }
    }
  
    componentDidMount(){
      RestClient.GetRequest(RestUrl.AllCharts).then(result=>{
        this.setState({
         data:result,
        });
        RestClient.GetRequest(RestUrl.TechHome).then(result=>{
          this.setState({
           tech_description:result[0].tech_description,
          });
        })
      }).catch(error=>{
        this.setState({
          data:[],
        });
    })
  }






  render() {
    

    return (
      <Fragment>
        <Container>
          <h1 className='text-center servicetitle'>TECHNOLOGY USED</h1>
          <div className='buttom'></div>
          <Row>
          <Col  lg={6} md={6} sm={12} >
              <ResponsiveContainer style={{width:'100%',height:'300px' }}>
                    <BarChart width={100} height={300} data={this.state.data}>
                        <XAxis dataKey="X_data" />
                        <Bar dataKey='Y_data' fill="#03326d" />
                        <Tooltip/>

                    </BarChart>
              </ResponsiveContainer>


            </Col>

            <Col lg={6} md={6} sm={12}>
              <p className='text-justify servicedescription'>
                {parse(this.state.tech_description)}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Analysis
