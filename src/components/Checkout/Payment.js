import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


const Payment = () => {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (e) => {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }

        setValidated(true)
    }

    return (
        <div className="Payment">
            <h5>Payment Information</h5>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label className="Payment_Label">NAME ON CREDIT CARD</Form.Label>
                    <Form.Control className="Payment_Input" type="text" placeholder="Jane Doe" required />
                </Form.Group>

                <Form.Group controlId="creditCard">
                    <Form.Label className="Payment_Label">CREDIT CARD NUMBER</Form.Label>
                    <Form.Control className="Payment_Input" type="number" placeholder="0000 0000 0000 0000" required />
                </Form.Group>
                <Form.Row>
                    <Form.Group controlId="expiry" style={{ width: "65%", marginLeft: "5px" }}>
                        <Form.Label className="Payment_Label">EXPIRES ON</Form.Label>
                        <Form.Control className="Payment_Input" type="date" required />
                    </Form.Group>
                    <Form.Group controlId="cvc" style={{ width: "25%", marginLeft: "5%" }}>
                        <Form.Label className="Payment_Label">CVC</Form.Label>
                        <Form.Control className="Payment_Input" type="number" placeholder="000" required />
                    </Form.Group>
                </Form.Row>
                <Button variant="danger" type="submit" className="Payment_Btn" >
                    BOOK SECURELY
                </Button>
                <Form.Text className="text-muted text-center">
                    🔐 Your Credit Card info is Encrypted.
                </Form.Text>
            </Form>
        </div>
    )
}

export default Payment
