
import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PayPalButton from '../components/PaypalButton';

const initialOptions = {
    "client-id": "AUAFpkQvlPWkr1GxcGNcPCu4elK-QE46I0HhGUDgrDKydubaBuzr7mbr4xuxbLqgz67mv_rvEa_7yEkb",
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
