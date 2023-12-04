import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { containerStyle, navColStyle, mainColStyle, sectionStyle, rowStyle } from './styles';
import Bio from './Bio';
import Banner from './Banner';
import Nav from './Nav';
import TopBanner from './TopBanner';
import { BrowserRouter, Link } from "react-router-dom";
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
import './styles/App.css'
import Footer from './Footer';

function App() {
  const colStyle = {}
  return (
    <Container fluid style={containerStyle}>
      {/* Header */}
      <header>
        <Row>
          <Col >
            <BrowserRouter>
              <TopBanner />
            </BrowserRouter>
          </Col>
        </Row>
      </header>

      {/* Main Content */}
      <Row style={rowStyle}>
        {/* Navigation Sidebar (Left) */}
        <Col md={2} className="" style={navColStyle}>
          <BrowserRouter>
            <Nav />
          </BrowserRouter>
        </Col>

        {/* Main Section */}
        <Col xs={12} md={10} style={mainColStyle}>
          <main id='Home-main-section'>
            <section id="Home-Banner" style={sectionStyle}>
              <Banner />
            </section>
            <section id="Home-Bio" style={sectionStyle}>
              <Bio />
            </section>
            <section id="Home-Portfolio" style={sectionStyle}>
              <Portfolio />
            </section>
            <section id="Home-Contact" style={sectionStyle}>
              <ContactForm />
            </section>
          </main>
        </Col>
      </Row>

      {/* Footer */}
      {/* <Row> */}
        <Row style={{position:"absolute", width:"100%"}}>
          {/* <Col> */}
            <Footer />
          {/* </Col> */}
        </Row>
      {/* </Row> */}
    </Container>
  );
}

export default App;
