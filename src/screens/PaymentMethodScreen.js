import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import CheckoutSteps from "../components/CheckoutSteps";
import { Store } from "../Store";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function PaymentMethodScreen() {

    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: { shippingAddress, paymentMethod } } = state;

    const [paymentMethodName, setPaymentMethod] = useState(paymentMethod || 'PayPal');

    useEffect(() => {
        if (!shippingAddress.address) {
            navigate('/shipping');
        }
    }, [shippingAddress, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
        localStorage.setItem('paymentMethod', paymentMethodName);
        navigate('/placeOrder');
    };

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="container small-container">
                <Helmet>
                    <title>Payment Screen</title>
                </Helmet>
                <h1 className="my-3">Payment Option</h1>
                <Form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <Form.Check type="radio" id="PayPal" label="PayPal" value="PayPal" checked={paymentMethodName === 'PayPal'} onChange={(e) => setPaymentMethod(e.target.value)}>

                        </Form.Check>
                    </div>
                    <div className="mb-3">
                        <Button type="submit">Continue</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}