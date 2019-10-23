import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Router>
    <Container>
        <App />
    </Container>
    </Router>
    , document.getElementById('root'));


