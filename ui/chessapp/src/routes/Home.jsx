import React, { Component } from 'react';
import Header from '../components/Header';
import Engines from '../components/Engines';

class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
                <Engines />
            </React.Fragment>
        );
    }
}

export default Home;