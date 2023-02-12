import React from 'react'
import "../components/styles/table.css";
import "../components/styles/processOrder.css";
const ProcessOrder = () => {
  return (
    <>
      <div className='processOrderMainContainer'>
        <div className="processingDetails">
          <h2>Shipping Info</h2>
          <h3>Payment</h3>
          <h3>Order Status</h3>
          <h3>Your Cart Items</h3>
        </div>
        <div className='splitTwoDivsLine'></div>
        <div className="processOrderDelivered">
          <div className="heading">
            <h1>PROCESS ORDER</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProcessOrder