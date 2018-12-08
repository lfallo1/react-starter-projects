import React, { Component } from 'react';
import { Button, Table, Container, Row, Col, Jumbotron } from 'reactstrap';
import Header from './Components/Header';
import CardItem from './Components/CardItem'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col>
              <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardItem title="Discover More" />
            </Col>
            <Col>
              <CardItem title="Contact Us" />
            </Col>
            <Col>
              <CardItem title="Careers Information" />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* TABLES */}
              <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
            </Col>
          </Row>
          

          {/* --- css start --- */}
          <style jsx>{` `}
          </style>
          {/* --- css end --- */}
        </Container>
      </>
    );
  }
}

export default App;
