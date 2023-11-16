import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { containerStyle, navColStyle, mainColStyle, sectionStyle, rowStyle } from './styles';
import Bio from './Bio';
import Banner from './Banner';
import Nav from './Nav';
import Header from './Header';

function App() {
  const colStyle = {}
  return (
    <Container fluid style={containerStyle}>
      {/* Header */}
      <header>
        <Row >
          <Col >
            <Header/>
          </Col>
        </Row>
      </header>

      {/* Main Content */}
        <Row style={rowStyle}>
          {/* Navigation Sidebar (Left) */}
          <Col md={2} className="d-flex justify-content-center align-items-center" style={navColStyle}>
              <Nav />
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
              <section id="section3" style={sectionStyle}>
                <h2>Our Services</h2>
                <ul>
                  <li>Web Design</li>
                  <li>Mobile App Development</li>
                  <li>E-commerce Solutions</li>
                  <li>SEO Services</li>
                </ul>
              </section>
            </main>
          </Col>
        </Row>
      {/* Footer */}
      <footer>
        <Row style={rowStyle}>
          <Col style={colStyle}>
            <p>&copy; 2023 My Website</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default App;
