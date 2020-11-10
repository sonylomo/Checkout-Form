import React from 'react'
import {Table} from 'react-bootstrap'

const OrderSummary = (props) => {
    
    return (
        <div className="Order_Summary">
            <h5>Order Summary</h5>
            <Table hover variant="light" >
                <tbody>
                    <tr>
                        <td>320 x {props.duration} days </td>
                        <td>{props.durationPrice} USD</td>
                    </tr>
                    <tr>
                        <td>Discount </td>
                        <td>{props.discount} USD</td>
                    </tr>
                    <tr>
                        <td>Subtotal </td>
                        <td>{props.subtotal} USD</td>
                    </tr>
                    <tr>
                        <td>Tax </td>
                        <td>{props.tax} USD</td>
                    </tr>
                    <tr style = {{fontWeight: "bold"}}>
                        <td>TOTAL </td>
                        <td>{props.total} USD</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default OrderSummary
