import './App.css'
import Checkout from './components/Checkout/Checkout'
import 'bootstrap/dist/css/bootstrap.css'
import ImagePreview from './components/ImagePreview/ImagePreview'
import { Container, Row, Col } from 'react-bootstrap'
/*const container = (
  <Container>
    <ImagePreview price={this.state.price} duration={this.state.duration} people={this.state.people} image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
    <Checkout duration={this.state.duration} discount={this.state.discount} tax={this.state.tax} price={this.state.price} onSubmit={this.handleSubmit} />
  </Container>
);*/

function App() {
  const initialState = {
    mounted: false,
    people: 1,
    price: 320.00,
    tax: 20,
    duration: 5,
    discount: 5
  }

  return (
    <div className="App">
      <Container>
        <Row className="Row">
          <Col>
            <ImagePreview price={initialState.price} people={initialState.people} />
          </Col>
          <Col>
            <Checkout InitialState={initialState.duration} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
