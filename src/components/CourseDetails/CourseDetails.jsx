import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import coursedetailimg from '../../assets/images/coursedetail.png'
import ReactPlayer from 'react-player'
export class CourseDetails extends Component {
  render() {
    return (
     <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={8} md={6} sm={12}>
                <div>
                    <div>
                    <h1 className='coursedetailstext'>Education in continuing a proud tradition.</h1>  
                    </div>
                     <img className='coursedetailsimg' src={coursedetailimg} alt="" />
                     <br />
                     <br />
                     <p className='coursedetailsdescription'> 
                     The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. <br /> Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, <br /> vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. <br /> Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. <br /> Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy  red vixens fight for a quick jump.
                     </p>

                </div>
                </Col>


                <Col lg={4} md={6} sm={12}>

                <div className="widget widget_feature mt-5" >
                            <h4 className="widget-title">Course Features</h4>                                 
                            <ul >
                                <li><i className="fa fa-user"></i><span>Enrolled :</span> 1200 students</li>
                                <li><i className="fa fa-clock-o"></i><span>Duration :</span> 2 hours</li>
                                <li><i className="fa fa-clipboard"></i><span>Lectures :</span> 8</li>
                                <li><i className="fa fa-clone"></i><span>Categories:</span> Technology</li>
                                <li><i className="fa fa-tags"></i><span>Tags:</span> Android, JavaScript</li>
                                <li><i className="fa fa-clipboard"></i><span>Instructor:</span> Ethan Dean</li>
                            </ul>
                            <div className="price-wrap text-center">
                                <h5>Price:<span>$54.00</span></h5>
                                <Button variant='warning' className='btn btn-warning'>Enroll Now</Button>
                            </div>
                        </div>
                </Col>

            </Row>

            <Container >
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <div className="widget_feature">
                        <h1 className='coursedetailstext'> Skill You Need</h1>
                        <hr />
                        <ul>
                            <li>Metus interdum metus</li>
                            <li> Ligula cur maecenas
                            Fringilla nulla</li>
                            <li>Metus interdum metus</li>
                            <li> Ligula cur maecenas
                            Fringilla nulla</li>
                            <li>Metus interdum metus</li>
                            <li> Ligula cur maecenas
                            Fringilla nulla</li>
                        </ul>
                    </div>
                    </Col>


                    <Col lg={6} md={6} sm={12}>
                    
                    <Modal.Body><ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /></Modal.Body>
                    </Col>
                </Row>
            </Container>
        </Container>
     </Fragment>
    )
  }
}

export default CourseDetails
