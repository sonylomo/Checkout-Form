import './App.css'
import Checkout from './components/Checkout/Checkout'
import 'bootstrap/dist/css/bootstrap.css'
import ImagePreview from './components/ImagePreview/ImagePreview'
import { Container, Row, Col } from 'react-bootstrap'

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
      <Container className="Container">
        <Row className="Row shadow bg-white rounded">
          <Col md={6} sm={12}>
            <ImagePreview price={initialState.price} people={initialState.people} />
          </Col>
          <Col lg={6} sm={12}>
            <Checkout InitialState={initialState.duration} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
