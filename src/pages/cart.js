import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { QRCodeCanvas } from 'qrcode.react';
import axios from 'axios';

const CartPage = ({price}) => {
  function aa(){
    alert("Please amount", {price});
  }
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    phone: '',
  });
  const [qrCodeData, setQrCodeData] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('Pending');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Generate QR Code for Payment
  const handleGenerateQR = () => {
    if (!userInfo.name || !userInfo.address || !userInfo.phone) {
      alert('Please fill in all fields!');
      return;
    }
    const paymentData = {
      name: userInfo.name,
      phone: userInfo.phone,
      amount: {price}, // Example amount
      upi_id:'9779381920@ybl'
    };
    setQrCodeData(JSON.stringify(paymentData)); // Store payment info as QR Code data
  };

  // Handle Form Submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/payment', {
        ...userInfo,
        paymentStatus,
      });
      if (response.data.success) {
        setSuccessMessage('User information and payment status saved successfully!');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Cart Checkout</h2>
      <Form>
        {/* <Row> */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        {/* </Row> */}
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your address"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleGenerateQR}>
          Generate QR Code
        </Button>
      </Form>

      <div className="mt-4">
        {qrCodeData && (
          <>
            <h4>Pay {price} with QR code</h4>
            {/* <QRCodeCanvas value={qrCodeData} size={200} /> */}
            <img
          style={{height:'250px', width:'250px'}}
          src="images/product/QR.jpg"
          alt="First slide"
        />
          </>
        )}
      </div>

      {/* <div className="mt-4">
        <Button variant="success" onClick={handleSubmit} >
          Submit Payment Details
        </Button>
      </div> */}

      {/* {successMessage && (
        <Alert variant="success" className="mt-3">
          {successMessage}
        </Alert> */}
    </Container>
  );
};

export default CartPage;
