import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const containerStyle = {
    border: '1px solid #000',
    padding: '10px',
  };

  const rowStyle = {
    border: '1px solid #000',
    display: 'flex',
  };

  const navColStyle = {
    border: '1px solid #000',
    padding: '10px',
  };

  const mainColStyle = {
    border: '1px solid #000',
    padding: '10px',
    width: '100%',
  };

  const sectionStyle = {
    border: '1px solid #000',
    padding: '10px',
  };

  const colStyle = {}
  return (
    <div>
      {/* Header */}
      <header>
        <Container style={containerStyle}>
          <Row style={rowStyle}>
            <Col style={colStyle}>
              <h1>My Website</h1>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Main Content */}
      <main>
        <Container style={containerStyle}>
          <Row style={rowStyle}>
            {/* Navigation Sidebar (Left) */}
            <Col md={3} className="d-none d-md-block" style={navColStyle}>
              <nav>
                <h2>Navigation</h2>
                <ul>
                  <li><a href="#section1">Home</a></li>
                  <li><a href="#section2">About Us</a></li>
                  <li><a href="#section3">Services</a></li>
                </ul>
              </nav>
            </Col>

            {/* Main Section */}
            <Col xs={12} md={9} style={mainColStyle}>
              <section id="section1" style={sectionStyle}>
                <h2>Welcome to My Website</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut vestibulum turpis, id gravida felis. Suspendisse potenti.</p>
              </section>
              <section id="section2" style={sectionStyle}>
                <h2>About Us</h2>
                <p>We are a passionate team dedicated to providing high-quality web development solutions.</p>
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
            </Col>
          </Row>
        </Container>
      </main>

      {/* Footer */}
      <footer>
        <Container style={containerStyle}>
          <Row style={rowStyle}>
            <Col style={colStyle}>
              <p>&copy; 2023 My Website</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
