import React from 'react';
import { render } from 'react-snapshot';
import './main.scss';
import Router from './Router';
import { unregister } from './registerServiceWorker';

import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

render(
    <Elements stripe={stripePromise}><Router/></Elements>,
    document.getElementById('root')
  );

unregister();