import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';

export default function UtilityCategoryScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, PaymentMethod },
  } = state;

  const [PaymentMethodName, setPaymentMethod] = useState(
    PaymentMethod || 'Electricity'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/utility');
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_Category', payload: PaymentMethodName });
    localStorage.setItem('PaymentMethod', PaymentMethodName);
    navigate('/upayment');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Utility Category</title>
        </Helmet>
        <h1 className="my-3">Utility Category</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Electricity"
              label="Electricity"
              value="Electricity"
              checked={PaymentMethodName === 'Electricity'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Telephone"
              label="Telephone"
              value="Telephone"
              checked={PaymentMethodName === 'Telephone'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Water"
              label="Water"
              value="Water"
              checked={PaymentMethodName === 'Water'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
