import React, { Component, Fragment } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

 class RefundDescription extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
  render() {
    return (
      <Fragment>
       
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12} >;
                <div>
                    <h2 className='serviceName'>PRIVACY NOTICE</h2>
                    <p  className='servicedescription '>These terms and conditions are entered into by and between You and BuyerForesight, a Step2 Strategy LLC brand (“Company,” “we,” or “us”). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively, “Terms of Use”), govern your access to and use of those websites, pages, features, content, platforms and services that we own or operate (collectively referred to herein as the “Website”), whether as a guest or a registered user.
                   <br />  Please read the Terms of Use carefully before you start to use the Website. By using the Website, you accept and agree to be bound and abide by these Terms of Use. If you do not want to agree to these Terms of Use, you must not access or use the Website.
                   <br /> This Website is offered and available to users who are 18 years of age or older. By using this Website, you represent and warrant that you are of legal age to form a binding contract with the Company and meet all of the foregoing eligibility requirements. If you do not meet all of these requirements, you must not access or use the Website.</p>
                </div>

                <div>
                    <h2 className='serviceName'>Changes to the Terms of Use</h2>
                    <p  className='servicedescription '>
                    We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Website thereafter.
                 <br />   Your continued use of the Website following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.
                    </p>
                </div>

                <div>
                    <h2 className='serviceName'>Accessing the Website and Account Security</h2>
                    <p  className='servicedescription '>
                    We reserve the right to withdraw or amend the Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Website, or the entire Website, to users, including registered users.
                    You are responsible for both:
                    <br />
                    Making all arrangements necessary for you to have access to the Website.
                    Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.
                    To access the Website or some of the resources it offers, you may be asked to provide certain registration details or other information. It is a condition of your use of the Website that all the information you provide on the Website is correct, current and complete. You agree that all information you provide to register with the Website or otherwise, including, but not limited to, through the use of any interactive features on the Website, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy.
                    <br />
                    If you choose, or are provided with, a user name, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You also acknowledge that your account is personal to you and agree not to provide any other person with access to the Website or portions of it using your user name, password or other security information. You agree to notify us immediately of any unauthorized access to or use of your user name or password or any other breach of security. You also agree to ensure that you exit from your account at the end of each session. You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information.
                    We have the right to disable any user name, password or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms of Use.
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RefundDescription
