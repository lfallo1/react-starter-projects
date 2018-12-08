import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (

        <Container>
          <Row>
            <Col>
              <h2>React Demo App</h2>
            </Col>
          </Row>
          

          {/* --- css start --- */}
          <style jsx>{` `}
          </style>
          {/* --- css end --- */}
        </Container>
    );
  }
}

export default App;
