
import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PayPalButton from '../components/PaypalButton';

const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID as string,
    currency: "USD",
    intent: "capture",
};

const App = () => {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <div className="App">
                <h1>PayPal Integration</h1>
                <PayPalButton />
            </div>
        </PayPalScriptProvider>
    );
};

export default App;
