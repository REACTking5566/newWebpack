import React, { Component } from 'react';
import './App.css';
import Test1 from './projectSection/test1'
import  './scss/reset.scss';
import  './scss/project/test1.scss';

class App1 extends Component {
    render() {
        return (
            <div className="projectSection">
                <Test1></Test1>
            </div>
        );
    }
}

export default App1;
