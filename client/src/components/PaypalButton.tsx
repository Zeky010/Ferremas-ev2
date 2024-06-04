// PayPalButton.tsx
import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import {payPalPost} from '../api/Paypal.api.ts';

const PayPalButton = () => {
    const createOrder = async () => {
        const res = await payPalPost();
        return res.data.approval_url;
    };

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
        });
    };

    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return createOrder().then((approvalUrl) => {
                    window.location.href = approvalUrl;
                });
            }}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    );
};

export default PayPalButton;
