import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutStepsUtility(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Sign-In</Col>
      <Col className={props.step2 ? 'active' : ''}>Payment Details</Col>
      <Col className={props.step3 ? 'active' : ''}>Utility Category</Col>
      <Col className={props.step4 ? 'active' : ''}>Pay</Col>
    </Row>
  );
}
