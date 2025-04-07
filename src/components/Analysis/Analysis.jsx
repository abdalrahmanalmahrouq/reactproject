import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

 class Analysis extends Component {


  constructor() {
    super();
    this.state = {
      data: [
        { name: 'React', value: 90 },
        { name: 'JavaScript', value: 80 },
        { name: 'HTML', value: 60 },
        { name: 'CSS', value: 65 },
        { name: 'LARAVEL', value: 79 },
      ],
    };
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
                        <XAxis dataKey="name" />
                        <Bar dataKey='value' fill="#03326d" />
                        <Tooltip/>

                    </BarChart>
              </ResponsiveContainer>


            </Col>

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
                Additionally, modern JavaScript (ES6+) features such as arrow functions, destructuring, and template literals are extensively used to write clean and maintainable code. 
                <br /><br />
                <strong>Webpack</strong> and <strong>Babel</strong> are used for module bundling and transpiling, ensuring compatibility across different browsers. 
                <br /><br />
                The application also integrates RESTful APIs for dynamic data fetching and interaction with backend services. 
                <br /><br />
                For version control and collaboration, <strong>Git</strong> and <strong>GitHub</strong> are utilized. 
                <br /><br />
                Finally, the project is hosted on a cloud platform, ensuring scalability and high availability.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Analysis
