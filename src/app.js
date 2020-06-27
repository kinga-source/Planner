import React from 'react';
import ReactDOM from 'react-dom';
import {
    tasklist
} from "./components/task/tasklist";
import './scss/main.scss';


ReactDOM.render( <
    tasklist / > ,
    document.getElementById('app')
)